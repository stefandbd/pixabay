import {clearRequest, photosRequest} from '$httpclient/action';
import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import Images from '$themes/Images';
import styles from './style';

// //////////////////////////////////////////////////////////////////////////////////

type OwnProps = {
  currentPage: number;
  queryString: string;
  keepQueryString: Function;
};

// //////////////////////////////////////////////////////////////////////////////////

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
        photosRequest({
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
    dispatch(
      clearRequest({
        page: null,
        queryString: '',
      }),
    );
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
            if (text.length > 0) {
              dispatch(
                photosRequest({
                  page: currentPage,
                  queryString: text,
                }),
              );
            } else if (text.length === 0) {
              dispatch(
                clearRequest({
                  page: null,
                  queryString: '',
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
