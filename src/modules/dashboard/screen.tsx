import React, {useCallback, useState} from 'react';
import {Text, FlatList, ActivityIndicator, ListRenderItem} from 'react-native';
import {connect} from 'react-redux';
import PhotoItem from '$components/PhotoItem';
import Searchbar from '$components/SearchBar';
import {FooterContainer, NoItemsContainer} from './style';
import colors from '$themes/Colors';
import {PhotoModel} from '$utils/types';

// //////////////////////////////////////////////////////////////////////////////////

const contentContainerStyle = {
  backgroundColor: colors.white,
};

const headerStyle = {width: '100%', marginBottom: 8};
const ITEM_HEIGHT = 240; // fixed height of item component

// //////////////////////////////////////////////////////////////////////////////////
export interface Props {
  photosModel: {
    data: PhotoModel[];
    moreLoading: boolean;
    isListEnd: boolean;
  };
}

// //////////////////////////////////////////////////////////////////////////////////

const DashboardScreen = ({photosModel}: Props) => {
  const [page, setPage] = useState(1);
  const [keepQuery, setKeepQuery] = useState('');

  const getItemLayout = (_, index: number) => {
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
    <NoItemsContainer>
      <Text>No Data at the moment</Text>
    </NoItemsContainer>
  );

  const renderItem: ListRenderItem<PhotoModel> = ({item}) => {
    return <PhotoItem item={item} />;
  };

  const keyExtractor = useCallback(
    (item: PhotoModel) => item.id.toString(),
    [],
  );

  return (
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
  );
};

const mapStateToProps = (state: any) => {
  return {
    photosModel: state.photos,
  };
};

export default connect(mapStateToProps)(DashboardScreen);
