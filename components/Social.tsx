import styled from "@emotion/styled";

const SocialLinksStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    a > img{
        margin: 0 6px;
        cursor: pointer;
    }
    #twitter_link{
        height: 45px;
    }
    #github_link{
        height: 30px;
    }
    #discord_link{
        height: 40px;
    }
    p {
        text-align: center;
    }
`;

export default function SocialLinks() {
  return (
    <SocialLinksStyled>
      <a
        title="Source Code"
        target="_blank"
        href="https://github.com/Graviton-Code-Editor/Graviton-App"
      >
        <img alt="Source Code" id="github_link" src="github_mark.png" />
      </a>
      <a
        title="Twitter Account"
        target="_blank"
        href="https://twitter.com/gravitoneditor"
      >
        <img
          alt="Twitter Account"
          id="twitter_link"
          src="twitter.svg"
        />
      </a>
      <a
        title="Discord Server"
        target="_blank"
        href="https://discord.com/invite/gg6CTYA"
      >
        <img alt="Discord Server" id="discord_link" src="discord.svg" />
      </a>
    </SocialLinksStyled>
  );
}
