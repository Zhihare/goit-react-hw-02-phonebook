import styled from 'styled-components';

export const ConteinerApp = styled.div`
 width: 600px;
  margin: 50px auto;
  padding: 2px;
  background-color: #eaab00;
  background-image: url("data:image/gif;base64,R0lGODlhAQABAPAAAOqrAP///yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="),
    url("data:image/gif;base64,R0lGODlhAQABAPAAAOqrAP///yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="),
    url("data:image/gif;base64,R0lGODlhAQABAPAAAP///////yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==");
  background-repeat: no-repeat;
  background-size: 0 2px, 0 100%, 0% 2px;
  background-position: top center, top center, bottom center;
  -webkit-animation: drawBorderFromCenter 4s;


@-webkit-keyframes drawBorderFromCenter {
  0% {
    background-size: 0 2px, 0 0, 100% 100%;
  }
  20% {
    background-size: 100% 2px, 100% 0, 100% 100%;
  }
  66% {
    background-size: 100% 2px, 100% 98%, 100% 100%;
  }
  99% {
    background-size: 100% 2px, 100% 98%, 0 2px;
  }
}

`

export const ContentApp = styled.div`
 background: white;
  padding: 2em;
  text-align: center;
 `

export const TitleApp = styled.h1`
 text-transform: uppercase;`