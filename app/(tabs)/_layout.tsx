import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
  return (
    <NativeTabs 
      minimizeBehavior="onScrollDown"      
    >
      <NativeTabs.Trigger name="home">
        <Label>Home</Label>
        <Icon sf="house.fill" drawable='ic_house' />
      </NativeTabs.Trigger>
      
      <NativeTabs.Trigger name="likes">
        <Icon sf="heart.fill" drawable='ic_heart' />
        <Label>Likes</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="profile">
        <Icon sf="person.crop.circle" drawable='ic_person' />
        <Label>Profile</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="create">
        <Icon sf="plus.circle.fill" drawable='ic_add_circle' /> 
      </NativeTabs.Trigger>

    </NativeTabs>
  );
}