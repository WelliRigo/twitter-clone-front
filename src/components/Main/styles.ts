import styled, {css} from 'styled-components';
import Button from '../Button';
import {ImageOutline, FileGif} from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: min(601px, 100%);
  

  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }

`;
export const Header = styled.div`
    z-index: 2;
    position: sticky;
    top: 0;
    background: var(--primary);
    display: flex;
    align-items: center;
    text-align: left;
    padding: 8px 0 9px 13px;

    border-bottom: 1px solid var(--outline);

`;
export const ProfileInfo = styled.div`
    margin-left: 17px;
    display: flex; 
    flex-direction: column;

    > strong {
        font-size: 19px;
        cursor: pointer;
    }
`;


export const Body = styled.div`
    display: flex;
    margin-top: 3px;
    position: relative;
    padding: 14px 16px;
    border-bottom: 1px solid var(--outline);
`;


export const Avatar = styled.div`
    width: 49px;
    height: 49px;

    border-radius: 50%;
    flex-shrink: 0;
    background: var(--gray);

    position: absolute;
    top: 25px;
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2px;
    padding-left: 59px;
    width: 100%;
`;
export const TextInput = styled.span`
    font-size: 18px;
    outline: none;
    margin-top: 20px;
    
    &:empty::before {
    content: "O que está acontecendo?";
    color: gray;
  }

  cursor: text;
  
`;

export const ImageContent = styled.div`
    margin-top: 12px;
    width: 100%;
    height: min(285px, max(175px, 41vw)); 
    background: var(--outline);

    border-radius: 14px;
    cursor: pointer;

    &:hover{
        opacity: .7;
    }
`;

export const Attachments = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 35px;
`

export const Icons = styled.div`
    display: flex;
    align-items: center;
`;


const iconCSS = css`
    width: 25px;
    height: 25px;
    fill: var(--twitter);
    margin: 0 15px 0 0;
    cursor: pointer;

    &:hover{
      border-radius: 40%;
      fill: var(--twitter-light-hover);
    }
`

export const ImageIcon = styled(ImageOutline)`${iconCSS}`;
export const GifIcon = styled(FileGif)`${iconCSS}`;

export const NewTweetButton = styled(Button)`
  font-size: 15px;
  padding: 6px 16px;
`



