import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

    /* @font-face {
        font-family: "Space Grotesk Light";
        src: local('Space Grotesk Light'), url("../../public/fonts/SpaceGrotesk-Regular.ttf") format("truetype");
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: "Space Grotesk Regular";
        src: local('Space Grotesk Regular'), url("../../public/fonts/SpaceGrotesk-Regular.ttf") format("truetype");
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: "Space Grotesk Medium";
        src: local('Space Grotesk Medium'), url("../../public/fonts/SpaceGrotesk-Medium.ttf") format("truetype");
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: "Space Grotesk Bold";
        src: local('Space Grotesk Bold'), url("../../public/fonts/SpaceGrotesk-Bold.ttf") format("truetype");
        font-style: normal;
        font-display: swap;
    } */


    /* body,
    html,
    a {
        font-family: 'Space Grotesk', sans-serif;
        font-weight: 800;
    } */


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: #fff;
        overflow-x: hidden;
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
            box-shadow: #2e186a 0px 0px 0px 1px;
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
