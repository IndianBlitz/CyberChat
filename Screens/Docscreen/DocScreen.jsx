import { StatusBar } from "expo-status-bar";
import {
  
  StyleSheet,
  Text,

  
  ScrollView ,
 
} from "react-native";

const DocScreen = function ({ navigation }) {
  return (
    <ScrollView style={styles.Screen}>
      <StatusBar style="dark" />
      <Text style={styles.textAes}>
       <Text style={styles.commonText}> Advanced Encryption Standard (AES)</Text> is a specification for the encryption
        of electronic data established by the U.S National Institute of
        Standards and Technology (NIST) in 2001. AES is widely used today as it
        is a much stronger than DES and triple DES despite being harder to
        implement. Points to remember AES is a block cipher. The key size can be
        128/192/256 bits. Encrypts data in blocks of 128 bits each. That means
        it takes 128 bits as input and outputs 128 bits of encrypted cipher text
        as output. AES relies on substitution-permutation network principle
        which means it is performed using a series of linked operations which
        involves replacing and shuffling of the input data.
      </Text>
      <Text style={styles.textDes}>
        <Text style={styles.commonText}>Data encryption standard (DES)</Text> has been found vulnerable to very
        powerful attacks and therefore, the popularity of DES has been found
        slightly on the decline. DES is a block cipher and encrypts data in
        blocks of size of 64 bits each, which means 64 bits of plain text go as
        the input to DES, which produces 64 bits of ciphertext. The same
        algorithm and key are used for encryption and decryption, with minor
        differences. The key length is 56 bits.
      </Text>
      <Text style={styles.textTripleDES}>
      <Text style={styles.commonText}>Triple DES (3DES or TDES)</Text>, officially the Triple Data Encryption Algorithm (TDEA or Triple DEA), is a symmetric-key block cipher, which applies the DES cipher algorithm three times to each data block. The Data Encryption Standard's (DES) 56-bit key is no longer considered adequate in the face of modern cryptanalytic techniques and supercomputing power. A CVE released in 2016, CVE-2016-2183 disclosed a major security vulnerability in DES and 3DES encryption algorithms. This CVE, combined with the inadequate key size of DES and 3DES, NIST has deprecated DES and 3DES for new applications in 2017, and for all applications by the end of 2023.[1] It has been replaced with the more secure, more robust AES.
      </Text>
      <Text style={styles.textRC4}>
      <Text style={styles.commonText}>RC4 means Rivest Cipher 4</Text> invented by Ron Rivest in 1987 for RSA
        Security. It is a Stream Ciphers. Stream Ciphers operate on a stream of
        data byte by byte. RC4 stream cipher is one of the most widely used
        stream ciphers because of its simplicity and speed of operation. It is a
        variable key-size stream cipher with byte-oriented operations. It uses
        either 64 bit or 128-bit key sizes. It is generally used in applications
        such as Secure Socket Layer (SSL), Transport Layer Security (TLS), and
        also used in IEEE 802.11 wireless LAN std.
      </Text>
      <Text style={styles.textRC4drop}>
      Protocols can defend against this attack by discarding the initial portion of the keystream. Such a modified algorithm is traditionally called <Text style={styles.commonText}>"RC4-drop[n]"</Text>, where n is the number of initial keystream bytes that are dropped. The SCAN default is n = 768 bytes, but a conservative value would be n = 3072 bytes.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
  },
commonText:{
    color:"red"
  },
  textAes: {
    margin: "5%",
  },
  textDes: {
    margin: "5%",
  },
  textTripleDES: {
    margin: "5%",
  },
  textRC4: {
    margin: "5%",
  },
  textRC4drop: {
    margin: "5%",
  },
});
export default DocScreen;
