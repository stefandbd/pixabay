import {clearRequest, topHeadlineRequest} from '$httpclient/action';
import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import Images from '$themes/Images';
import styles from './style';

type OwnProps = {
  currentPage: number;
  queryString: string;
  keepQueryString: Function;
};

const Searchbar: React.FC<OwnProps> = ({
  currentPage,
  queryString,
  keepQueryString,
}) => {
  const [searchString, setSearchString] = useState(
    queryString ? queryString : '',
  );
  const [error, setError] = useState();
  const dispatch = useDispatch();

  const requestAPI = () => {
    if (searchString.length >= 3) {
      dispatch(
        topHeadlineRequest({
          page: currentPage,
          queryString: searchString,
        }),
      );
    }
  };

  useEffect(() => {
    setSearchString(prevItem => prevItem);
    requestAPI();
  }, [currentPage]);

  const onClear = () => {
    setSearchString('');
    dispatch(clearRequest());
  };
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.vwSearch}>
          <Image style={styles.icSearch} source={Images.search} />
        </View>

        <TextInput
          value={searchString}
          placeholder="Search"
          placeholderTextColor="#466399"
          style={styles.textInput}
          onChangeText={text => {
            setSearchString(text);
            keepQueryString(text);
            if (text.length >= 3) {
              dispatch(
                topHeadlineRequest({
                  page: currentPage,
                  queryString: text,
                }),
              );
            }
          }}
        />
        {searchString ? (
          <TouchableOpacity onPress={() => onClear()} style={styles.vwClear}>
            <Image style={styles.icSearch} source={Images.close} />
          </TouchableOpacity>
        ) : (
          <View style={styles.vwClear} />
        )}
      </View>
      {error && <Text style={styles.txtError}>{error}</Text>}
    </View>
  );
};
export default Searchbar;