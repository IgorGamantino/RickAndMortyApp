import styled from "styled-components/native"


export const Container = styled.SafeAreaView`
  flex:1;
  align-items: center;
  paddingHorizontal: 20px;
`;

export const Header = styled.View`
margin-top: 10px;
align-items: center;
`;

export const TopHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width:100%;
  background-color: "red";
`;


export const Icon = styled.Text``;
export const Favorite = styled.Text``;
export const Title=  styled.Text`
  font-size: 25px;
  color:#3a3f46;

`;

export const Image = styled.Image`
  width: 120px;
  border-radius: 8px;
  height: 120px;

`;

export const About = styled.View`
 margin-top: 20px;
 paddingHorizontal:20px;
  width: 100%;
  gap: 4px;
  align-items: flex-start;
`;

export const TitleAbout = styled.Text`
  font-size: 22px;
  font-weight: 600;
`;  

export const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: #AEAEB3;
  opacity: 0.2;

`;

export const Name = styled.Text`
 margin-top: 10px;
 font-size: 15px;
`;


export const  Status= styled.Text`

font-size: 15px;
`;

export const  Species= styled.Text`
 font-size: 15px;
 `;

 export const Origin= styled.Text``;


export const Gender = styled.Text`
   font-size: 15px;

`;

export const Location = styled.Text`
 font-size: 15px;
`;

export const EpisodeContainer= styled.View`
  margin-top: 20px;
  paddingHorizontal: 20px;
  justify-content: flex-start;
  width: 100%;
`;

export const TitleEpisode = styled.Text`
  font-size: 22px;
  font-weight: 600;

`;


export const EpisodeContent = styled.ScrollView``;

export const NameEpisode = styled.Text`
  margin: 10px 0px;


`;

export const ContainerNameEpisodeAndImg = styled.View``;

export const ImageEpisode = styled.Image`
  width: 120px;
  height: 120;

`;

export const ButtonFavorite = styled.TouchableOpacity`
  padding: 10px;
`;

export const ButtonGoBack = styled.TouchableOpacity`
 padding:10px;

`;