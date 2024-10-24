import { StyleSheet } from 'react-native';

const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonMoeda: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonIMC: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonMedida: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonTextMoeda: {
    color: '#fff',
    fontSize: 16,
  },
  buttonTextIMC: {
    color: '#fff',
    fontSize: 16,
  },
  buttonTextMedida: {
    color: '#fff',
    fontSize: 16,
  },
});

export default HomeStyles