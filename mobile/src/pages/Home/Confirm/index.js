import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Button,
  Image,
} from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob';
import {Container, Background, Content} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {RNCamera} from 'react-native-camera';

import api from '~/services/api';

const PendingView = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text style={{color: '#fff'}}>Esperando</Text>
  </View>
);

export default function Confirm() {
  const [photo, setPhoto] = useState({});

  async function takePicture(camera) {
    const options = {quality: 0.5, base64: true};
    const data = await camera.takePictureAsync(options);
    //  eslint-disable-next-line

    setPhoto({
      uri: data.uri,
      type: 'image/jpeg',
      originalname: 'user_signature_delivery_id_teste.jpg',
    });
  }

  async function handleSendPicture() {
    const data = new FormData();

    data.append('file', {
      uri: photo.uri,
      type: photo.type,
      name: photo.originalname,
    });

    try {
      const response = await api.post('files', data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <Background />
      <Content>
        {Object.keys(photo).length === 0 ? (
          <View style={styles.container}>
            <RNCamera
              style={styles.preview}
              captureAudio={false}
              type={RNCamera.Constants.Type.front}
              autoFocus={RNCamera.Constants.AutoFocus.on}
              flashMode={RNCamera.Constants.FlashMode.off}
              androidCameraPermissionOptions={{
                title: 'Permissão para usar a câmera',
                message: 'Nós precisamos de sua permissão para usar a câmera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
              }}>
              {({camera, status, recordAudioPermissionStatus}) => {
                if (status !== 'READY') return <PendingView />;
                return (
                  <View>
                    <TouchableOpacity
                      onPress={() => takePicture(camera)}
                      style={styles.capture}>
                      <Icon name="photo-camera" size={30} color="#fff" />
                    </TouchableOpacity>
                  </View>
                );
              }}
            </RNCamera>
          </View>
        ) : (
          <View style={{flex: 1}}>
            <Image
              source={{uri: photo.uri}}
              style={{width: '100%', height: '100%', resizeMode: 'cover'}}
            />
          </View>
        )}
      </Content>
      <View>
        <Button title="Enviar" onPress={handleSendPicture} />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
  capture: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: 50,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
