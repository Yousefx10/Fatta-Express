import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [meal, setMeal] = useState('');
  const [customer, setCustomer] = useState('');
  const [response, setResponse] = useState('');

  const placeOrder = () => {
    fetch('http://localhost/backend/index.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        meal: meal,
        customer: customer
      })
    })
    .then(response => response.json())
    .then(data => setResponse(data.message))
    .catch(error => console.error('Error:', error));
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to Fatta Express</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your meal"
        value={meal}
        onChangeText={setMeal}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={customer}
        onChangeText={setCustomer}
      />
      <Button title="Place Order" onPress={placeOrder} />
      <Text>{response}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    width: 200,
    paddingHorizontal: 10
  }
});
