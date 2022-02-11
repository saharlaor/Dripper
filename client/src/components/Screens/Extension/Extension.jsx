import React from "react";
import { Button, Divider, Layout } from "antd";
import ExtensionFile from "./chrome-extension.zip";
import ExtensionFolderImg from "./decompressed-extension.png";
import MenuExtensionsImg from "./menu-extensions.png";
import LoadExtensionImg from "./load-extension.png";
import "./Extension.css";

const { Content } = Layout;

function Extension() {
  return (
    <div className="Extension">
      <Content>
        <h2>Chrome Extension</h2>
        <Divider orientation="left">Download</Divider>
        <p>
          In order to download the compressed chrome extension
          <Button type="link" href={ExtensionFile}>
            Click Here
          </Button>
          <br />
          Decompress the downloaded zip, a file named chrome-extension.crx
          should be inside
          <br />
          <img src={ExtensionFolderImg} alt="Decompressed Extension Folder" />
        </p>
        <Divider orientation="left">Installation</Divider>
        <p>
          Now that you have your crx file we need to load it to your extensions
          tab.
          <br />
          To get to the extensions tab, click the chrome 3 dot options at the
          top of your browser then "More Tools"&gt;"Extensions"
          <br />
          <img src={MenuExtensionsImg} alt="Chrome Menu Extensions Link" />
          <br />
          Once there, drag your .crx file into the webpage,
          <br />
          it should look like this
          <br />
          <img
            src={LoadExtensionImg}
            alt="Loading Extension To Extensions Page"
          />
          <br />
          Press the "Add Extension" button and you are set to go.
        </p>
        <Divider orientation="left">Usage</Divider>
        <p>
          Installing this extension gives you a quick way to navigate to this
          site from anywhere with 2 clicks, on the extension and link inside.
          <br />
          It also give you hourly notification to drink more, so you won't
          forget to fill your daily goals.
        </p>
      </Content>
    </div>
  );
}

export default Extension;
