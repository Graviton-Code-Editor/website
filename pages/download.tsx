import Navbar from "../components/Navbar";
import * as MainLayout from "../components/MainLayout";
import Title from "../components/Title";
import DownloadCard from "../components/DownloadCard";
import Head from "next/head";
import { IoLogoApple, IoLogoWindows } from "react-icons/io";
import { GrDebian } from "react-icons/gr";
import { FaLinux } from "react-icons/fa";
import CenteredContainer from "../components/CenteredContainer";

function Download() {
  return (
    <>
      <Head>
        <title>Graviton Editor</title>
      </Head>
      <Navbar />
      <MainLayout.Content>
        <CenteredContainer>
          <MainLayout.Header>
            <Title>Download</Title>
            <p className="note">Last release is version 2.3.0</p>
            <div>
              <DownloadCard href="https://github.com/Graviton-Code-Editor/Graviton-App/releases/download/v2.3.0/Graviton-Editor_Installer_2.3.0_win.exe">
                <IoLogoWindows></IoLogoWindows>
                Windows
              </DownloadCard>
              <DownloadCard href="https://github.com/Graviton-Code-Editor/Graviton-App/releases/download/v2.3.0/Graviton.Editor_Installer_2.3.0_linux_amd64.deb">
                <GrDebian></GrDebian>
                Debian
              </DownloadCard>
              <DownloadCard href="https://github.com/Graviton-Code-Editor/Graviton-App/releases/download/v2.3.0/Graviton-Editor_Installer_2.3.0_linux_x86_64.AppImage">
                <FaLinux></FaLinux>
                AppImage
              </DownloadCard>
              <DownloadCard href="https://github.com/Graviton-Code-Editor/Graviton-App/releases/download/v2.3.0/Graviton.Editor_Installer_2.3.0_linux_x86_64.rpm">
                <FaLinux></FaLinux>
                <br/>RPM
              </DownloadCard>
              <DownloadCard href="https://github.com/Graviton-Code-Editor/Graviton-App/releases/download/v2.3.0/Graviton-Editor_Installer_2.3.0_mac.dmg">
                <IoLogoApple></IoLogoApple>
                MacOS
              </DownloadCard>
            </div>
          </MainLayout.Header>
        </CenteredContainer>
      </MainLayout.Content>
    </>
  );
}

export default Download;
