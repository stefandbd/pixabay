import React, {useCallback, useState} from 'react';
import {Text, SafeAreaView, FlatList, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import PhotoItem from '$components/PhotoItem';
import Searchbar from '$components/SearchBar';
import {FooterContainer} from './style';

const contentContainerStyle = {
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'center',
};

const headerStyle = {width: '100%', marginBottom: 8};
const ITEM_HEIGHT = 240; // fixed height of item component

const DashboardScreen = ({photosModel}) => {
  const [page, setPage] = useState(1);
  const [keepQuery, setKeepQuery] = useState('');

  const getItemLayout = (data, index) => {
    return {
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * photosModel.data.length,
      index,
    };
  };

  const fetchMoreData = () => {
    setPage(page + 1);
  };

  const keepQueryString = (text: string) => {
    setKeepQuery(text ? text : '');
  };

  const renderHeader = useCallback(() => {
    return (
      <Searchbar
        currentPage={page}
        keepQueryString={keepQueryString}
        queryString={keepQuery}
      />
    );
  }, [page]);

  const renderFooter = () => (
    <FooterContainer>
      {photosModel.moreLoading && (
        <ActivityIndicator size="large" color="blue" />
      )}
      {photosModel.isListEnd && <Text>No more photos at the moment</Text>}
    </FooterContainer>
  );

  const renderEmpty = () => (
    <>
      <Text>No Data at the moment</Text>
    </>
  );

  const renderItem = item => {
    return <PhotoItem item={item.item} />;
  };

  const keyExtractor = useCallback(item => item.id.toString(), []);

  return (
    <SafeAreaView>
      <FlatList
        contentContainerStyle={contentContainerStyle}
        ListHeaderComponentStyle={headerStyle}
        data={photosModel.data}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={renderEmpty}
        initialNumToRender={10}
        onEndReachedThreshold={0.2}
        onEndReached={fetchMoreData}
        keyExtractor={keyExtractor}
        //maxToRenderPerBatch
        //windowSize
      />
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    photosModel: state.photos,
  };
};

export default connect(mapStateToProps)(DashboardScreen);
