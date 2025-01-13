import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://10.0.2.2:8000/index')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error!', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View>
        <Text className="text-black font-bold bg-yellow-500">Loading...</Text>
      </View>
    );
  }

  return (
    <View>
      {data ? (
        <Text className="bg-orange-400 text-white font-bold">
          {JSON.stringify(data)}
        </Text>
      ) : (
        <Text className="text-black font-bold bg-pink-600">
          No Data Available
        </Text>
      )}
    </View>
  );
};

export default App;
