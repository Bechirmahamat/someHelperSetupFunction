import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'

import Ionicons from '@expo/vector-icons/AntDesign'

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          display: 'flex',
          borderRadius: 36,
          // elevation: 0,
          paddingHorizontal: 0,
          paddingVertical: 0,
          bottom: 27,
          height: 72,
          marginRight: 16,
          marginLeft: 16,
        },
      }}
    >
      <Tabs.Screen
        name='home'
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#38A169',
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarButton: (props: any) => (
            <TouchableOpacity
              {...props}
              // className='bg-red-500'
              style={{
                // backgroundColor: 'red',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                // width: 40,
                // height: 40,
                margin: 'auto',
              }}
              activeOpacity={1} // Remove hover effect
            ></TouchableOpacity>
          ),
          tabBarIcon: ({ focused, color }) => {
            return (
              <View
                className={`${focused ? 'bg-[#38A169]' : ''} h-[50px] w-[50px] flex items-center justify-center  rounded-full `}
              >
                <Ionicons
                  name='home'
                  size={24}
                  color={focused ? 'white' : color}
                />
              </View>
            )
          },
        }}
      />
      <Tabs.Screen
        name='explore'
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarButton: (props: any) => (
            <TouchableOpacity
              {...props}
              // className='bg-red-500'
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                // width: 40,
                height: 40,
                margin: 'auto',
              }}
              activeOpacity={1} // Remove hover effect
            ></TouchableOpacity>
          ),
          tabBarIcon: ({ focused, color }) => {
            return (
              <View
                className={`${focused ? 'bg-[#38A169]' : ''} h-[50px] w-[50px] flex items-center justify-center  rounded-full `}
              >
                <Ionicons
                  name='earth'
                  size={24}
                  color={focused ? 'white' : color}
                />
              </View>
            )
          },
        }}
      />
      <Tabs.Screen
        name='message'
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarButton: (props: any) => (
            <TouchableOpacity
              {...props}
              // className='bg-red-500'
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                // width: 40,
                height: 40,
                margin: 'auto',
              }}
              activeOpacity={1} // Remove hover effect
            ></TouchableOpacity>
          ),
          tabBarIcon: ({ focused, color }) => {
            return (
              <View
                className={`${focused ? 'bg-[#38A169]' : ''} h-[50px] w-[50px] flex items-center justify-center  rounded-full `}
              >
                <Ionicons
                  name='message1'
                  size={24}
                  color={focused ? 'white' : color}
                />
              </View>
            )
          },
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarButton: (props: any) => (
            <TouchableOpacity
              {...props}
              // className='bg-red-500'
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                // width: 40,
                height: 40,
                margin: 'auto',
              }}
              activeOpacity={1} // Remove hover effect
            ></TouchableOpacity>
          ),
          tabBarIcon: ({ focused, color }) => {
            return (
              <View
                className={`${focused ? 'bg-[#38A169]' : ''} h-[50px] w-[50px] flex items-center justify-center  rounded-full `}
              >
                <Ionicons
                  name='user'
                  size={24}
                  color={focused ? 'white' : color}
                />
              </View>
            )
          },
        }}
      />
    </Tabs>
  )
}

export default TabsLayout
