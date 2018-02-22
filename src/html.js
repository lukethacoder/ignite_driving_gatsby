import React from "react"

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />  
          {this.props.headComponents}
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          {/* <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
          <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
          <script type="text/javascript" src="assets/slick/slick.min.js"></script> */}
          <script
            dangerouslySetInnerHTML={{__html: `

            function passWord() {
              var testV = 1;
              var pass1 = prompt('Please Enter Your Password',' ');
              while (testV < 3) {
              if (!pass1) 
              history.go(-1);
              if (pass1.toLowerCase() == "letmein") {
              alert('You welcome to the site!');
              break;
              } 
              testV+=1;
              var pass1 = 
              prompt('Access Denied - Password Incorrect, Please Try Again.','Password');
              }
              if (pass1.toLowerCase()!="password" & testV ==3) 
              history.go(-1);
              return " ";
              }

              passWord();

            `}}
          />
        </body>
      </html>
    )
  }
}
