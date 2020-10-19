# Bitcoinconverter

Example of use of conbase API. It's a currency converter.

Based on this documentation:

[CALLING REAL-TIME BITCOIN PRICE INFORMATION"](https://developers.coinbase.com/docs/wallet/guides/price-data)

![Coinbase](https://assets.coinbase.com/assets/coinbase.d491999a12d7c093ec6cd83ad64a1e23.png)


# Install

```npm
npm install react-aws-s3-uploader --save
```

Be sure to include the --save option to add this as a dependency in your application's package.json

# Usage

```js
import React, { Component } from 'react';
import S3Uploader from 'react-aws-s3-uploader'; // import the component

class App extends Component {

  state = {
    file: '',
  }

  handleFile = (file) => {
    this.setState({
      file
    });
  }

  render() {
    return (
      <S3Uploader
        albumBucketName="Bucket_Name" // Bucket Name
        IdentityPoolId="IdentityPool_Id" // Identity Pool Id
        handleFile={this.handleFile}
      />
    );
  }
}

export default App;
```

# Options

### buttonName
Name of button, default is "Upload File".

### bucketRegion
The bucket region of AWS.

### albumBucketName
Name of bucket where the files are stored.

### IdentityPoolId
Amazon Cognito identity pools provide temporary AWS credentials for users who are guests (unauthenticated) and for users who have been authenticated and received a token. An identity pool is a store of user identity data specific to your account. More info: [Using Identity Pools](https://docs.aws.amazon.com/cognito/latest/developerguide/identity-pools.html)

### handleFile
funtion to return the url of the file stored in s3.

## Example:

```js
  <S3Uploader
    buttonName="Upload File"
    bucketRegion="us-east-1"
    albumBucketName="arepa"
    IdentityPoolId="us-east-1:2fc911ef-0679"
    handleFile={this.handleFile}
  />
```

# Demo
Check here: [react-aws-s3-uploader](https://arepa-dev.github.io/reactAWSUploader/)

# Contributing
If someone wants to add or improve something, I invite you to collaborate directly in this repository: [react-mailchimp-form](https://github.com/gndx/react-aws-s3-uploader)

# License
React-mailchimp-form is released under the [MIT License](https://opensource.org/licenses/MIT).