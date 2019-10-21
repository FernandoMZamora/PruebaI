import React from 'react';

import {
    View,
    Text,
    Button,
} from 'react-native';

const Inicio = (props) => {

    const { 
        cambiarInterfaz, 
        campoTexto,
    } = props;

    return(
        <View>
            <Text>
                {campoTexto}
            </Text>
            <Button
                title='<- Regresar'
                onPress={
                    () => {
                    cambiarInterfaz('login');
                    }
                }
            />
        </View>
    );  
};

export default Inicio;