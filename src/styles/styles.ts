import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

    /* @font-face {
        font-family: "Space Grotesk Light";
        src: url("fonts/SpaceGrotesk-Regular.ttf") format("truetype");
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: "Space Grotesk Regular";
        src: url("fonts/SpaceGrotesk-Regular.ttf") format("truetype");
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: "Space Grotesk Medium";
        src: url("fonts/SpaceGrotesk-Medium.ttf") format("truetype");
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: "Space Grotesk Bold";
        src: url("fonts/SpaceGrotesk-Bold.ttf") format("truetype");
        font-style: normal;
        font-display: swap;
    } */


    /* body,
    html,
    a {
        font-family: 'Space Grotesk', sans-serif;
        font-weight: 800;
    } */

    /* CUSTOM SCROLLBAR */
    ::-webkit-scrollbar-track {
	  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	  /* border-radius: 10px; */
	  background-color: #041B44;
    }

    ::-webkit-scrollbar {
	  width: 12px;
	  background-color: #041B44;
    }

    ::-webkit-scrollbar-thumb {
	  /* border-radius: 10px; */
	  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	  background-color: #1464F6;
    }

    body {
        background: #fff;
        overflow-x: hidden;
    }

    img {
        user-drag: none;  
        user-select: none;
        -moz-user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }

    a {
        user-drag: none;  
        user-select: none;
        -moz-user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }

    button {
        user-drag: none;  
        user-select: none;
        -moz-user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }

    /* a:hover {
        color: #1890ff;
    } */

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: rgb(241, 242, 243);
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;

        :focus-within {
            background: none;
            box-shadow: #041B44 0px 0px 0px 1px;
        }
    }

    /* h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Space Grotesk', sans-serif;
        font-weight: 700;
        color: #000000;
        font-size: 56px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    } */

    p {
        font-family: 'Space Grotesk', sans-serif;
        font-weight: 300;
        color: #000000;
        font-size: 21px;        
        line-height: 1.41;
    }

    h1 {
        font-weight: 600;
    }

    /* a {
        text-decoration: none;
        outline: none;
        color: #1890ff;

        :hover {
            color: #1890ff;
        }
    } */
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }
`;
