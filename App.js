import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const App = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabPress = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        <TouchableOpacity style={[styles.tabItem, activeTab === 0 && styles.activeTabItem]} onPress={() => handleTabPress(0)}>
          <Text style={styles.tabText}>Beranda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tabItem, activeTab === 1 && styles.activeTabItem]} onPress={() => handleTabPress(1)}>
          <Text style={styles.tabText}>Tentang</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tabItem, activeTab === 2 && styles.activeTabItem]} onPress={() => handleTabPress(2)}>
          <Text style={styles.tabText}>Kontak</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tabContent}>
        {activeTab === 0 && <Text>Beranda Content</Text>}
        {activeTab === 1 && <Text>Tentang Content</Text>}
        {activeTab === 2 && <Text>Kontak Content</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 50,
    backgroundColor: "#f2f2f2",
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabText: {
    fontSize: 20,
  },
  activeTabItem: {
    borderBottomColor: "blue",
    borderBottomWidth: 5,
  },
  tabContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
