import React, { useEffect, useState } from 'react';
import { List, Avatar, Button, Skeleton } from 'antd';

const LoadMoreList = props => {
  const [ initLoading, setInitLoading] = useState(true);
  const [ loading, setLoading ] = useState(false);
  const [ data, setData ] = useState(props.gold && props.gold.goldList || []);
  const [ list, setList ] = useState(props.gold && props.gold.goldList || []);

  useEffect(() => {
    if(props.csr){
      props.refreshGoldList();
    }else{
      setInitLoading(true)
    }
    return () => {
      // clean func
    };
  }, []);

  onLoadMore = async() => {
    setLoading(true);
    setList(this.state.data.concat([...new Array(props.gold.limit)].map(() => ({ loading: true, name: {} }))));
    props.updateGoldConds({"offset": ++props.offset});
    props.refreshGoldList();
  };

  return (
    <List
      className="demo-loadmore-list"
      loading={initLoading}
      itemLayout="horizontal"
      loadMore={
        !initLoading && !loading ? (
          <div
            style={{
              textAlign: 'center',
              marginTop: 12,
              height: 32,
              lineHeight: '32px',
            }}
          >
            <Button onClick={this.onLoadMore}>loading more</Button>
          </div>
        ) : null
      }
      dataSource={list}
      renderItem={item => (
        <List.Item
          actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
        >
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={<a href="https://ant.design">{item.name.last}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
            <div>content</div>
          </Skeleton>
        </List.Item>
      )}
    />
  );
}

export default LoadMoreList