import React from 'react';

import {
    View,
    Button,
    TextInput,
} from 'react-native';

const Login = (props) => {

    const { 
        cambiarInterfaz,
        miOnChangeDeTexto,
        texto,
     } = props;

    return(
        <View>
            <View>
                <TextInput
                onChangeText={miOnChangeDeTexto}
                defaultValue={texto}
                placeholder="Ingrese el texto..."
            />
            </View> 
            <Button
                title='Vamos ->'
                onPress={
                    () => {
                    cambiarInterfaz('inicio');
                    }
                }
            />
        </View>
    );  
};

export default Login;