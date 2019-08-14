import React, { Component } from "react";
import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { View } from "react-native-animatable";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal01: false,
      modal02: false,
      modal03: false,
      modal04: false
    };
  }

  render() {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Modal
          transparent={true}
          isVisible={this.state.modal01}
          style={{
            flex: 1,
            margin: 0,
            justifyContent: "center",
            alignItems: "center"
          }} //Full screen modal with no marging and no animation
        >
          <View
            style={{
              flex: 1,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#C6C5B9"
            }}
          >
            <Text style={{ color: "#4A6D7C", fontSize: 30, marginBottom: 60 }}>
              Modal 001
            </Text>
            <TouchableOpacity
              style={{
                height: 30,
                width: 180,
                backgroundColor: "#62929E",
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={() => this.setState({ modal01: false })}
            >
              <Text style={{ color: "#C6C5B9" }}>Close Modal</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal
          transparent={true}
          isVisible={this.state.modal02}
          style={{
            flex: 1,
            margin: 0,
            justifyContent: "center",
            alignItems: "center"
          }}
          animationIn={"fadeIn"} //Modal show animation
          animationOut={"fadeOut"} // Modal hide animation
        >
          <View
            style={{
              height: 300, //Fixed View size
              width: 300, //Fixed View size
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#C6C5B9"
            }}
          >
            <Text style={{ color: "#4A6D7C", fontSize: 30, marginBottom: 60 }}>
              Modal 002
            </Text>
            <TouchableOpacity
              style={{
                height: 30,
                width: 180,
                backgroundColor: "#62929E",
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={() => this.setState({ modal02: false })}
            >
              <Text style={{ color: "#C6C5B9" }}>Close Modal</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal
          transparent={true}
          isVisible={this.state.modal03}
          style={{
            flex: 1,
            margin: 0,
            justifyContent: "center",
            alignItems: "center"
          }}
          animationIn={"slideInRight"} // <---
          animationOut={"slideOutLeft"}
        >
          <View
            style={{
              height: 300,
              width: 300,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#C6C5B9"
            }}
          >
            <Text style={{ color: "#4A6D7C", fontSize: 30, marginBottom: 60 }}>
              Modal 003
            </Text>
            <TouchableOpacity
              style={{
                height: 30,
                width: 180,
                backgroundColor: "#62929E",
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={() => this.setState({ modal03: false })}
            >
              <Text style={{ color: "#C6C5B9" }}>Close Modal</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal
          transparent={true}
          isVisible={this.state.modal04}
          style={{
            flex: 1,
            margin: 0,
            justifyContent: "center",
            alignItems: "center"
          }}
          animationIn={"bounceInDown"}
          animationOut={"bounceOutDown"}
        >
          <View
            style={{
              height: 300,
              width: 300,
              borderRadius: 150, // <--- make it round
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#C6C5B9"
            }}
          >
            <Text style={{ color: "#4A6D7C", fontSize: 30, marginBottom: 60 }}>
              Modal 004
            </Text>
            <TouchableOpacity
              style={{
                height: 30,
                width: 180,
                backgroundColor: "#62929E",
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={() => this.setState({ modal04: false })}
            >
              <Text style={{ color: "#C6C5B9" }}>Close Modal</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.setState({ modal01: true })}
        >
          <Text style={{ color: "#C6C5B9" }}>Show modal 001</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.setState({ modal02: true })}
        >
          <Text style={{ color: "#C6C5B9" }}>Show modal 002</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.setState({ modal03: true })}
        >
          <Text style={{ color: "#C6C5B9" }}>Show modal 003</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.setState({ modal04: true })}
        >
          <Text style={{ color: "#C6C5B9" }}>Show modal 004</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  button: {
    height: 30,
    width: 180,
    backgroundColor: "#62929E",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30
  }
});
