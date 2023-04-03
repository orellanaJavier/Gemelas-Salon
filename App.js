
import { StyleSheet, Text, View ,Image, TextInput,Button} from 'react-native';
import {initializepApp} from 'firebase/app';
import { firebaseConfig } from './firebase';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegistroScreen from './screens/RegistroScreen';

function LoginScreen({navigation}){
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const app = initializepApp(firebaseConfig);
  const auth = getAuth(app);
  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential) =>{
      console.log('Cuenta creada')
      const user = useCredential.user;
      console.log(user)
    })
    .catch(error =>{
      console.log(error)
    })
  }
  
  const handleSignIn = () => {
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
      console.log('Iniciar con')
      const user = userCredential.user;
      console.log(user)
    })
    .catch(error => {
      console.log(error)
    })
  }

  const Stack = createNativeStackNavigator();

  return(
    <View>
      <Image style = {styles.imagenlogin} source = {require('./assets/imagen1.png')} />
      <Text style = {styles.correo}>Correo</Text>
      <TextInput onChangeText={(text)=> setEmail(text) } style={styles.input} placeholder="ejemplo@gmail.com"/>
      <Text style= {styles.password}>Contraseña</Text>
      <TextInput onChangeText={(text)=> setPassword(text) } style = {styles.imput} placeholder="contraseña" secureTextEntry={true}/>
      <Button style={styles.button} onPress={() => navigation.navigate('HomeScreen')} >
      <Text style={{fontSize:17,fontWeight:'400',color:"rgba(0,0,0,1)"}}Login/>
      </Button>
      <Text style={{fontFamily:"Inter",fontWeight:400,fontSize:14,position:'absolute',width:"auto",height:"auto"}}>¿No tienes Cuenta?</Text>
      <Button  style={styles.registro} onPress={handleCreateAccount}>
        <Text>Registrate</Text>
      </Button>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Registro" component={RegistroScreen} />
      </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}
  

export default function App() {
  return (
     <LoginScreen/>
  );
}

const styles = StyleSheet.create({
  imagenlogin: {
    position: 'absolute',
    width: 320,
    height: 202,
    borderRadius: 10,
    opacity:1,
    transform:[{translateX:0,},{translateY:0},{rotate:"0deg"},]
  },
  correo:{
    position:'absolute',
    width:"auto",
    height:"auto",
    fontFamily:"Inter",
    fontWeight:400,
    fontSize:14,
    color:"rgba(0,0,0,1)",
    
  },
  input:{
    width:285,
    height:48,
    borderColor:"rgba(0,0,0,1)",
    borderRadius:10,
    padding:10,
    backgroundColor:"rgba(239,236,236,1)",
    marginVertical:10,
    marginBottom:20,
  },
  password:{
    position:'absolute',
    width:"auto",
    height:"auto",
    fontFamily:"Inter",
    fontWeight:400,
    fontSize:14,
    color:"rgba(0,0,0,1)",
  },
  imput:{
    width:285,
    height:48,
    borderColor:"rgba(0,0,0,1)",
    borderRadius:10,
    padding:10,
    backgroundColor:"rgba(239,236,236,1)",
    marginVertical:10,
    marginBottom:20,
  },
  button:{
    width:250,
    height:40,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:"rgba(14,251,194,1)"
  },
  registro:{
    fontFamily:"Nunito",
    position:'absolute',
    fontWeight:400,
    fontSize:15,
    color:"rgba(0,147,255,1)",
    width:"auto",
    height:"auto",
  }
});
