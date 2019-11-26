(this["webpackJsonpreact-lib-nikmargit"]=this["webpackJsonpreact-lib-nikmargit"]||[]).push([[0],[,,,,,,function(e,n,t){"use strict";var r=t(1),a=t(2),o=t(4),s=t(3),i=t(5),l=t(0),p=t.n(l),u=function(e){function n(){var e,t;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(i)))).getColor=function(e){return 100===t.props.percent?"green":t.props.percent>50?"lightgreen":"red"},t.getWidthAsPercentOfTotalWidth=function(){return parseInt(t.props.width*(t.props.percent/100),10)},t}return Object(i.a)(n,e),Object(a.a)(n,[{key:"render",value:function(){var e=this.props,n=e.percent,t=e.width,r=e.height;return p.a.createElement("div",{style:{border:"solid\xa01px\xa0lightgray",width:t}},"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",p.a.createElement("div",{style:{width:this.getWidthAsPercentOfTotalWidth(),height:r,backgroundColor:this.getColor(n)}}),"\xa0\xa0\xa0\xa0\xa0\xa0")}}]),n}(p.a.Component);u.defaultProps={height:5};var c=u;t.d(n,"a",(function(){return c}))},function(e,n,t){"use strict";var r=t(9),a=t(0),o=t.n(a),s=t(8);var i=function(e){var n=e.htmlId,t=e.name,a=e.label,i=e.type,l=void 0===i?"text":i,p=e.required,u=void 0!==p&&p,c=e.onChange,d=e.placeholder,m=e.value,h=e.error,g=e.children,f=Object(r.a)(e,["htmlId","name","label","type","required","onChange","placeholder","value","error","children"]);return o.a.createElement("div",{style:{marginBottom:16}},o.a.createElement(s.a,{htmlFor:n,label:a,required:u}),o.a.createElement("input",Object.assign({id:n,type:l,name:t,placeholder:d,value:m,onChange:c,style:h&&{border:"solid 1px red"}},f)),g,h&&o.a.createElement("div",{className:"error",style:{color:"red"}},h))};t.d(n,"a",(function(){return i}))},function(e,n,t){"use strict";var r=t(0),a=t.n(r);var o=function(e){var n=e.htmlFor,t=e.label,r=e.required;return a.a.createElement("label",{style:{display:"block"},htmlFor:n},t," ",r&&a.a.createElement("span",{style:{color:"red"}}," *"))};t.d(n,"a",(function(){return o}))},,function(e,n,t){"use strict";var r=t(9),a=t(1),o=t(2),s=t(4),i=t(3),l=t(5),p=t(0),u=t.n(p),c=t(6),d=t(11),m=t(7),h=function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(s.a)(this,Object(i.a)(n).call(this,e))).toggleShowPassword=function(e){t.setState((function(e){return{showPassword:!e.showPassword}})),e&&e.preventDefault()},t.state={showPassword:!1},t}return Object(l.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){var e=this.props,n=e.htmlId,t=e.value,a=e.label,o=e.error,s=e.onChange,i=e.placeholder,l=e.maxLength,p=e.showVisibilityToggle,h=e.quality,g=Object(r.a)(e,["htmlId","value","label","error","onChange","placeholder","maxLength","showVisibilityToggle","quality"]),f=this.state.showPassword;return u.a.createElement(m.a,Object.assign({htmlId:n,label:a,placeholder:i,type:f?"text":"password",onChange:s,value:t,maxLength:l,error:o,required:!0},g),p&&u.a.createElement("a",{href:"#",onClick:this.toggleShowPassword,style:{marginLeft:5}},u.a.createElement(d.a,null)),t.length>0&&h&&u.a.createElement(c.a,{percent:h,width:130}))}}]),n}(u.a.Component);h.defaultProps={maxLength:50,showVisibilityToggle:!1,label:"Password"};var g=h;t.d(n,"a",(function(){return g}))},function(e,n,t){"use strict";var r=t(0),a=t.n(r);var o=function(){return a.a.createElement("svg",{width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 22 22"},a.a.createElement("g",{transform:"matrix(.02146 0 0 .02146 1 1)",fill:"#4d4d4d"},a.a.createElement("path",{d:"m466.07 161.53c-205.6 0-382.8 121.2-464.2 296.1-2.5 5.3-2.5 11.5 0 16.9 81.4 174.9 258.6 296.1 464.2 296.1 205.6 0 382.8-121.2 464.2-296.1 2.5-5.3 2.5-11.5 0-16.9-81.4-174.9-258.6-296.1-464.2-296.1m0 514.7c-116.1 0-210.1-94.1-210.1-210.1 0-116.1 94.1-210.1 210.1-210.1 116.1 0 210.1 94.1 210.1 210.1 0 116-94.1 210.1-210.1 210.1"}),a.a.createElement("circle",{cx:"466.08",cy:"466.02",r:"134.5"})))};t.d(n,"a",(function(){return o}))},function(e,n){e.exports=[{name:"EyeIcon",description:"SVG Eye Icon",code:'import React from "react";\n\n/** SVG Eye Icon */\nfunction EyeIcon() {\n  // Attribution: Fabi\xe1n Alexis at https://commons.wikimedia.org/wiki/File:Antu_view-preview.svg\n  return (\n    <svg\n      width="16"\n      height="16"\n      xmlns="http://www.w3.org/2000/svg"\n      viewBox="0 0 22 22"\n    >\n      <g transform="matrix(.02146 0 0 .02146 1 1)" fill="#4d4d4d">\n        <path d="m466.07 161.53c-205.6 0-382.8 121.2-464.2 296.1-2.5 5.3-2.5 11.5 0 16.9 81.4 174.9 258.6 296.1 464.2 296.1 205.6 0 382.8-121.2 464.2-296.1 2.5-5.3 2.5-11.5 0-16.9-81.4-174.9-258.6-296.1-464.2-296.1m0 514.7c-116.1 0-210.1-94.1-210.1-210.1 0-116.1 94.1-210.1 210.1-210.1 116.1 0 210.1 94.1 210.1 210.1 0 116-94.1 210.1-210.1 210.1" />\n        <circle cx="466.08" cy="466.02" r="134.5" />\n      </g>\n    </svg>\n  );\n}\n\nexport default EyeIcon;\n',examples:[{name:"Example",description:"",code:'import React from "react";\nimport EyeIcon from "react-lib-nikmargit/EyeIcon";\n\nexport default function EyeIconExample() {\n  return <EyeIcon />;\n}\n'}]},{name:"HelloWorld",description:"",props:{message:{type:{name:"string"},required:!1,description:"Message to display",defaultValue:{value:'"World"',computed:!1}}},code:'import React from "react";\nimport PropTypes from "prop-types";\n\nfunction HelloWorld({ message }) {\n  return <div>Hello {message}</div>;\n}\n\nHelloWorld.propTypes = {\n  /** Message to display */\n  message: PropTypes.string\n};\n\nHelloWorld.defaultProps = {\n  /** Message to display */\n  message: "World"\n};\n\nexport default HelloWorld;\n',examples:[{name:"ExampleHelloWorld",description:"Custom message",code:'import React from "react";\n\nimport HelloWorld from "react-lib-nikmargit/HelloWorld";\n\n/**\n * Custom message\n */\nexport default function ExampleHelloWorld() {\n  return <HelloWorld message="this is a test"></HelloWorld>;\n}\n'}]},{name:"Label",description:"Label with required field display, htmlFor, and block styling",props:{htmlFor:{type:{name:"string"},required:!0,description:"HTML ID for associated input"},label:{type:{name:"string"},required:!0,description:"Label text"},required:{type:{name:"bool"},required:!1,description:"Display asterisk after label if true"}},code:'import React from "react";\nimport PropTypes from "prop-types";\n\n/** Label with required field display, htmlFor, and block styling */\nfunction Label({ htmlFor, label, required }) {\n  return (\n    <label style={{ display: "block" }} htmlFor={htmlFor}>\n      {label} {required && <span style={{ color: "red" }}> *</span>}\n    </label>\n  );\n}\n\nLabel.propTypes = {\n  /** HTML ID for associated input */\n  htmlFor: PropTypes.string.isRequired,\n\n  /** Label text */\n  label: PropTypes.string.isRequired,\n\n  /** Display asterisk after label if true */\n  required: PropTypes.bool\n};\n\nexport default Label;\n',examples:[{name:"LabelOptional",description:"Optional label",code:'import React from "react";\nimport Label from "react-lib-nikmargit/Label";\n\n/** Optional label */\nexport default function ExampleOptional() {\n  return <Label htmlFor="test" label="test" />;\n}\n'},{name:"LabelRequired",description:"Required label",code:'import React from "react";\nimport Label from "react-lib-nikmargit/Label";\n\n/** Required label */\nexport default function ExampleRequired() {\n  return <Label htmlFor="test" label="test" required />;\n}\n'}]},{name:"PasswordInput",description:"Password input with integrated label, quality tips, and show password toggle.",props:{htmlId:{type:{name:"string"},required:!0,description:"Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing."},name:{type:{name:"string"},required:!0,description:"Input name. Recommend setting this to match object's property so a single change handler can be used by convention."},value:{type:{name:"any"},required:!1,description:"Password value"},label:{type:{name:"string"},required:!1,description:"Input label",defaultValue:{value:"'Password'",computed:!1}},onChange:{type:{name:"func"},required:!0,description:"Function called when password input value changes"},maxLength:{type:{name:"number"},required:!1,description:"Max password length accepted",defaultValue:{value:"50",computed:!1}},placeholder:{type:{name:"string"},required:!1,description:"Placeholder displayed when no password is entered"},showVisibilityToggle:{type:{name:"bool"},required:!1,description:"Set to true to show the toggle for displaying the currently entered password",defaultValue:{value:"false",computed:!1}},quality:{type:{name:"number"},required:!1,description:"Display password quality visually via ProgressBar, accepts a number between 0 and 100"},error:{type:{name:"string"},required:!1,description:"Validation error to display"}},code:"import React from 'react';\nimport PropTypes from 'prop-types';\nimport ProgressBar from '../ProgressBar';\nimport EyeIcon from '../EyeIcon';\nimport TextInput from '../TextInput';\n\n/** Password input with integrated label, quality tips, and show password toggle. */\nclass PasswordInput extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      showPassword: false\n    }\n  }\n\n  toggleShowPassword = event => {\n    this.setState(prevState => {\n      return { showPassword: !prevState.showPassword };\n    });\n    if (event) event.preventDefault();\n  }\n\n  render() {\n    const { htmlId, value, label, error, onChange, placeholder, maxLength, showVisibilityToggle, quality, ...props } = this.props;\n    const { showPassword } = this.state;\n\n    return (\n      <TextInput\n        htmlId={htmlId}\n        label={label}\n        placeholder={placeholder}\n        type={showPassword ? 'text' : 'password'}\n        onChange={onChange}\n        value={value}\n        maxLength={maxLength}\n        error={error}\n        required\n        {...props}>\n        {\n          showVisibilityToggle &&\n          <a\n            href=\"#\"\n            onClick={this.toggleShowPassword}\n            style={{ marginLeft: 5 }}>\n            <EyeIcon />\n          </a>\n        }\n        {\n          value.length > 0 && quality && <ProgressBar percent={quality} width={130} />\n        }\n      </TextInput>\n    );\n  }\n}\n\nPasswordInput.propTypes = {\n  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */\n  htmlId: PropTypes.string.isRequired,\n\n  /** Input name. Recommend setting this to match object's property so a single change handler can be used by convention.*/\n  name: PropTypes.string.isRequired,\n\n  /** Password value */\n  value: PropTypes.any,\n\n  /** Input label */\n  label: PropTypes.string,\n\n  /** Function called when password input value changes */\n  onChange: PropTypes.func.isRequired,\n\n  /** Max password length accepted */\n  maxLength: PropTypes.number,\n\n  /** Placeholder displayed when no password is entered */\n  placeholder: PropTypes.string,\n\n  /** Set to true to show the toggle for displaying the currently entered password */\n  showVisibilityToggle: PropTypes.bool,\n\n  /** Display password quality visually via ProgressBar, accepts a number between 0 and 100 */\n  quality: PropTypes.number,\n\n  /** Validation error to display */\n  error: PropTypes.string\n};\n\nPasswordInput.defaultProps = {\n  maxLength: 50,\n  showVisibilityToggle: false,\n  label: 'Password'\n};\n\nexport default PasswordInput;\n",examples:[{name:"ExampleAllFeatures",description:"All features enabled",code:'import React from "react";\nimport PasswordInput from "react-lib-nikmargit/PasswordInput";\n\n/** All features enabled */\nclass ExampleAllFeatures extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      password: ""\n    };\n  }\n\n  getQuality() {\n    const length = this.state.password.length;\n    return length > 10 ? 100 : length * 10;\n  }\n\n  render() {\n    return (\n      <div>\n        <PasswordInput\n          htmlId="password-input-example-all-features"\n          name="password"\n          onChange={event => this.setState({ password: event.target.value })}\n          value={this.state.password}\n          minLength={8}\n          placeholder="Enter password"\n          showVisibilityToggle\n          quality={this.getQuality()}\n          {...this.props}\n        />\n      </div>\n    );\n  }\n}\n\nexport default ExampleAllFeatures;\n'}]},{name:"ProgressBar",description:"",props:{percent:{type:{name:"number"},required:!0,description:"Percent of progress completed"},width:{type:{name:"number"},required:!0,description:"Bar width"},height:{type:{name:"number"},required:!1,description:"Bar height",defaultValue:{value:"5",computed:!1}}},code:'import React from "react";\nimport PropTypes from "prop-types";\n\nclass ProgressBar extends React.Component {\n  getColor = percent => {\n    if (this.props.percent === 100) return "green";\n    return this.props.percent > 50 ? "lightgreen" : "red";\n  };\n\n  getWidthAsPercentOfTotalWidth = () => {\n    return parseInt(this.props.width * (this.props.percent / 100), 10);\n  };\n\n  render() {\n    const { percent, width, height } = this.props;\n    return (\n      <div style={{ border: "solid\xa01px\xa0lightgray", width: width }}>\n        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\n        <div\n          style={{\n            width: this.getWidthAsPercentOfTotalWidth(),\n            height,\n            backgroundColor: this.getColor(percent)\n          }}\n        />\n        \xa0\xa0\xa0\xa0\xa0\xa0\n      </div>\n    );\n  }\n}\n\nProgressBar.propTypes = {\n  /** Percent of progress completed */\n  percent: PropTypes.number.isRequired,\n\n  /** Bar width */\n  width: PropTypes.number.isRequired,\n\n  /** Bar height */\n  height: PropTypes.number\n};\n\nProgressBar.defaultProps = {\n  height: 5\n};\n\nexport default ProgressBar;\n',examples:[{name:"Example100Percent",description:"100% progress and height 20px",code:'import React from "react";\nimport ProgressBar from "react-lib-nikmargit/ProgressBar";\n\n/** 100% progress and height 20px */\nexport default function Example100Percent() {\n  return <ProgressBar percent={100} width={150} height={20} />;\n}\n'},{name:"Example10Percent",description:"10% progress",code:'import React from "react";\nimport ProgressBar from "react-lib-nikmargit/ProgressBar";\n\n/** 10% progress */\nexport default function Example10Percent() {\n  return <ProgressBar percent={10} width={150} />;\n}\n'},{name:"Example70Percent",description:"70% progress",code:'import React from "react";\nimport ProgressBar from "react-lib-nikmargit/ProgressBar";\n\n/** 70% progress */\nexport default function Example70Percent() {\n  return <ProgressBar percent={70} width={150} />;\n}\n'}]},{name:"RegistrationForm",description:"Registration form with built-in validation.",props:{confirmationMessage:{type:{name:"string"},required:!1,description:"Message displayed upon successful submission",defaultValue:{value:'"Thanks for registering!"',computed:!1}},onSubmit:{type:{name:"func"},required:!0,description:"Called when form is submitted"},minPasswordLength:{type:{name:"number"},required:!1,description:"Minimum password length",defaultValue:{value:"8",computed:!1}}},code:'import React from "react";\nimport PropTypes from "prop-types";\nimport TextInput from "../TextInput";\nimport PasswordInput from "../PasswordInput";\n\n/** Registration form with built-in validation. */\nclass RegistrationForm extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      user: {\n        email: "",\n        password: ""\n      },\n      errors: {},\n      submitted: false\n    };\n  }\n\n  onChange = event => {\n    const user = this.state.user;\n    user[event.target.name] = event.target.value;\n    this.setState({ user });\n  };\n\n  // Returns a number from 0 to 100 that represents password quality.\n  // For simplicity, just returning % of min length entered.\n  // Could enhance with checks for number, special char, unique characters, etc.\n  passwordQuality(password) {\n    if (!password) return null;\n    if (password.length >= this.props.minPasswordLength) return 100;\n    const percentOfMinLength = parseInt(\n      (password.length / this.props.minPasswordLength) * 100,\n      10\n    );\n    return percentOfMinLength;\n  }\n\n  validate({ email, password }) {\n    const errors = {};\n    const { minPasswordLength } = this.props;\n\n    if (!email) errors.email = "Email required.";\n    if (password.length < minPasswordLength)\n      errors.password = `Password must be at least ${minPasswordLength} characters.`;\n\n    this.setState({ errors });\n    const formIsValid = Object.getOwnPropertyNames(errors).length === 0;\n    return formIsValid;\n  }\n\n  onSubmit = () => {\n    const { user } = this.state;\n    const formIsValid = this.validate(user);\n    if (formIsValid) {\n      this.props.onSubmit(user);\n      this.setState({ submitted: true });\n    }\n  };\n\n  render() {\n    const { errors, submitted } = this.state;\n    const { email, password } = this.state.user;\n\n    return submitted ? (\n      <h2>{this.props.confirmationMessage}</h2>\n    ) : (\n      <div>\n        <TextInput\n          htmlId="registration-form-email"\n          name="email"\n          onChange={this.onChange}\n          label="Email"\n          value={email}\n          error={errors.email}\n          required\n        />\n\n        <PasswordInput\n          htmlId="registration-form-password"\n          name="password"\n          value={password}\n          onChange={this.onChange}\n          quality={this.passwordQuality(password)}\n          showVisibilityToggle\n          maxLength={50}\n          error={errors.password}\n        />\n\n        <input type="submit" value="Register" onClick={this.onSubmit} />\n      </div>\n    );\n  }\n}\n\nRegistrationForm.propTypes = {\n  /** Message displayed upon successful submission */\n  confirmationMessage: PropTypes.string,\n\n  /** Called when form is submitted */\n  onSubmit: PropTypes.func.isRequired,\n\n  /** Minimum password length */\n  minPasswordLength: PropTypes.number\n};\n\nRegistrationForm.defaultProps = {\n  confirmationMessage: "Thanks for registering!",\n  minPasswordLength: 8\n};\n\nexport default RegistrationForm;\n',examples:[{name:"ExampleAllFeatures",description:"",code:'import React from "react";\nimport RegistrationForm from "react-lib-nikmargit/RegistrationForm";\n\nexport default class ExampleRegistrationForm extends React.Component {\n  onSubmit = user => {\n    console.log(user);\n  };\n\n  render() {\n    return <RegistrationForm onSubmit={this.onSubmit} />;\n  }\n}\n'}]},{name:"TextInput",description:"Text input with integrated label to enforce consistency in layout, error display, label placement, and required field marker.",props:{htmlId:{type:{name:"string"},required:!0,description:"Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing."},name:{type:{name:"string"},required:!0,description:"Input name. Recommend setting this to match object's property so a single change handler can be used."},label:{type:{name:"string"},required:!0,description:"Input label"},type:{type:{name:"enum",value:[{value:'"text"',computed:!1},{value:'"number"',computed:!1},{value:'"password"',computed:!1}]},required:!1,description:"Input type",defaultValue:{value:'"text"',computed:!1}},required:{type:{name:"bool"},required:!1,description:"Mark label with asterisk if set to true",defaultValue:{value:"false",computed:!1}},onChange:{type:{name:"func"},required:!0,description:"Function to call onChange"},placeholder:{type:{name:"string"},required:!1,description:"Placeholder to display when empty"},value:{type:{name:"any"},required:!1,description:"Value"},error:{type:{name:"string"},required:!1,description:"String to display when error occurs"},children:{type:{name:"node"},required:!1,description:"Child component to display next to the input"}},code:'import React from "react";\nimport PropTypes from "prop-types";\nimport Label from "../Label";\n\n/** Text input with integrated label to enforce consistency in layout, error display, label placement, and required field marker. */\nfunction TextInput({\n  htmlId,\n  name,\n  label,\n  type = "text",\n  required = false,\n  onChange,\n  placeholder,\n  value,\n  error,\n  children,\n  ...props\n}) {\n  return (\n    <div style={{ marginBottom: 16 }}>\n      <Label htmlFor={htmlId} label={label} required={required} />\n      <input\n        id={htmlId}\n        type={type}\n        name={name}\n        placeholder={placeholder}\n        value={value}\n        onChange={onChange}\n        style={error && { border: "solid 1px red" }}\n        {...props}\n      />\n      {children}\n      {error && (\n        <div className="error" style={{ color: "red" }}>\n          {error}\n        </div>\n      )}\n    </div>\n  );\n}\n\nTextInput.propTypes = {\n  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */\n  htmlId: PropTypes.string.isRequired,\n\n  /** Input name. Recommend setting this to match object\'s property so a single change handler can be used. */\n  name: PropTypes.string.isRequired,\n\n  /** Input label */\n  label: PropTypes.string.isRequired,\n\n  /** Input type */\n  type: PropTypes.oneOf(["text", "number", "password"]),\n\n  /** Mark label with asterisk if set to true */\n  required: PropTypes.bool,\n\n  /** Function to call onChange */\n  onChange: PropTypes.func.isRequired,\n\n  /** Placeholder to display when empty */\n  placeholder: PropTypes.string,\n\n  /** Value */\n  value: PropTypes.any,\n\n  /** String to display when error occurs */\n  error: PropTypes.string,\n\n  /** Child component to display next to the input */\n  children: PropTypes.node\n};\n\nexport default TextInput;\n',examples:[{name:"ExampleError",description:"Required TextBox with error",code:'import React from "react";\nimport TextInput from "react-lib-nikmargit/TextInput";\n\n/** Required TextBox with error */\nexport default class ExampleError extends React.Component {\n  render() {\n    return (\n      <TextInput\n        htmlId="example-optional"\n        label="First Name"\n        name="firstname"\n        onChange={() => {}}\n        required\n        error="First name is required."\n      />\n    );\n  }\n}\n'},{name:"ExampleOptional",description:"Optional TextBox",code:'import React from "react";\nimport TextInput from "react-lib-nikmargit/TextInput";\n\n/** Optional TextBox */\nexport default class ExampleOptional extends React.Component {\n  render() {\n    return (\n      <TextInput\n        htmlId="example-optional"\n        label="First Name"\n        name="firstname"\n        onChange={() => {}}\n      />\n    );\n  }\n}\n'}]}]},,,function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));var r=t(0),a=t.n(r),o=t(11);function s(){return a.a.createElement(o.a,null)}},function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));var r=t(0),a=t.n(r),o=t(8);function s(){return a.a.createElement(o.a,{htmlFor:"test",label:"test"})}},function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));var r=t(0),a=t.n(r),o=t(8);function s(){return a.a.createElement(o.a,{htmlFor:"test",label:"test",required:!0})}},function(e,n,t){"use strict";t.r(n);var r=t(1),a=t(2),o=t(4),s=t(3),i=t(5),l=t(0),p=t.n(l),u=t(10),c=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(o.a)(this,Object(s.a)(n).call(this,e))).state={password:""},t}return Object(i.a)(n,e),Object(a.a)(n,[{key:"getQuality",value:function(){var e=this.state.password.length;return e>10?100:10*e}},{key:"render",value:function(){var e=this;return p.a.createElement("div",null,p.a.createElement(u.a,Object.assign({htmlId:"password-input-example-all-features",name:"password",onChange:function(n){return e.setState({password:n.target.value})},value:this.state.password,minLength:8,placeholder:"Enter password",showVisibilityToggle:!0,quality:this.getQuality()},this.props)))}}]),n}(p.a.Component);n.default=c},function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));var r=t(0),a=t.n(r),o=t(6);function s(){return a.a.createElement(o.a,{percent:100,width:150,height:20})}},function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));var r=t(0),a=t.n(r),o=t(6);function s(){return a.a.createElement(o.a,{percent:10,width:150})}},function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));var r=t(0),a=t.n(r),o=t(6);function s(){return a.a.createElement(o.a,{percent:70,width:150})}},function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return c}));var r=t(1),a=t(2),o=t(4),s=t(3),i=t(5),l=t(0),p=t.n(l),u=t(7),c=function(e){function n(){return Object(r.a)(this,n),Object(o.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(i.a)(n,e),Object(a.a)(n,[{key:"render",value:function(){return p.a.createElement(u.a,{htmlId:"example-optional",label:"First Name",name:"firstname",onChange:function(){},required:!0,error:"First name is required."})}}]),n}(p.a.Component)},function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return c}));var r=t(1),a=t(2),o=t(4),s=t(3),i=t(5),l=t(0),p=t.n(l),u=t(7),c=function(e){function n(){return Object(r.a)(this,n),Object(o.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(i.a)(n,e),Object(a.a)(n,[{key:"render",value:function(){return p.a.createElement(u.a,{htmlId:"example-optional",label:"First Name",name:"firstname",onChange:function(){}})}}]),n}(p.a.Component)},function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r);function o(e){var n=e.message;return a.a.createElement("div",null,"Hello ",n)}o.defaultProps={message:"World"};var s=o;function i(){return a.a.createElement(s,{message:"this is a test"})}t.d(n,"default",(function(){return i}))},function(e,n,t){"use strict";t.r(n);var r=t(1),a=t(2),o=t(4),s=t(3),i=t(5),l=t(0),p=t.n(l),u=t(7),c=t(10),d=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(o.a)(this,Object(s.a)(n).call(this,e))).onChange=function(e){var n=t.state.user;n[e.target.name]=e.target.value,t.setState({user:n})},t.onSubmit=function(){var e=t.state.user;t.validate(e)&&(t.props.onSubmit(e),t.setState({submitted:!0}))},t.state={user:{email:"",password:""},errors:{},submitted:!1},t}return Object(i.a)(n,e),Object(a.a)(n,[{key:"passwordQuality",value:function(e){return e?e.length>=this.props.minPasswordLength?100:parseInt(e.length/this.props.minPasswordLength*100,10):null}},{key:"validate",value:function(e){var n=e.email,t=e.password,r={},a=this.props.minPasswordLength;return n||(r.email="Email required."),t.length<a&&(r.password="Password must be at least ".concat(a," characters.")),this.setState({errors:r}),0===Object.getOwnPropertyNames(r).length}},{key:"render",value:function(){var e=this.state,n=e.errors,t=e.submitted,r=this.state.user,a=r.email,o=r.password;return t?p.a.createElement("h2",null,this.props.confirmationMessage):p.a.createElement("div",null,p.a.createElement(u.a,{htmlId:"registration-form-email",name:"email",onChange:this.onChange,label:"Email",value:a,error:n.email,required:!0}),p.a.createElement(c.a,{htmlId:"registration-form-password",name:"password",value:o,onChange:this.onChange,quality:this.passwordQuality(o),showVisibilityToggle:!0,maxLength:50,error:n.password}),p.a.createElement("input",{type:"submit",value:"Register",onClick:this.onSubmit}))}}]),n}(p.a.Component);d.defaultProps={confirmationMessage:"Thanks for registering!",minPasswordLength:8};var m=d;t.d(n,"default",(function(){return h}));var h=function(e){function n(){var e,t;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(i)))).onSubmit=function(e){console.log(e)},t}return Object(i.a)(n,e),Object(a.a)(n,[{key:"render",value:function(){return p.a.createElement(m,{onSubmit:this.onSubmit})}}]),n}(p.a.Component)},,,function(e,n,t){e.exports=t(36)},,,,,function(e,n,t){},function(e,n,t){var r={"./EyeIcon/Example":15,"./EyeIcon/Example.js":15,"./HelloWorld/ExampleHelloWorld":24,"./HelloWorld/ExampleHelloWorld.js":24,"./Label/LabelOptional":16,"./Label/LabelOptional.js":16,"./Label/LabelRequired":17,"./Label/LabelRequired.js":17,"./PasswordInput/ExampleAllFeatures":18,"./PasswordInput/ExampleAllFeatures.js":18,"./ProgressBar/Example100Percent":19,"./ProgressBar/Example100Percent.js":19,"./ProgressBar/Example10Percent":20,"./ProgressBar/Example10Percent.js":20,"./ProgressBar/Example70Percent":21,"./ProgressBar/Example70Percent.js":21,"./RegistrationForm/ExampleAllFeatures":25,"./RegistrationForm/ExampleAllFeatures.js":25,"./TextInput/ExampleError":22,"./TextInput/ExampleError.js":22,"./TextInput/ExampleOptional":23,"./TextInput/ExampleOptional.js":23};function a(e){var n=o(e);return t(n)}function o(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=34},,function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(26),s=t.n(o),i=(t(33),t(1)),l=t(2),p=t(4),u=t(3),c=t(5),d=function(e){var n=e.components;return a.a.createElement("ul",{className:"navigation"},n.map((function(e){return a.a.createElement("li",{key:e},a.a.createElement("a",{href:"#".concat(e)},e))})))},m=t(13),h=t.n(m),g=t(27),f=t.n(g),b=function(e){function n(){return Object(i.a)(this,n),Object(p.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(c.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){h.a.registerLanguage("javascript",f.a),h.a.highlightBlock(this.element)}},{key:"render",value:function(){var e=this;return a.a.createElement("pre",{ref:function(n){e.element=n}},a.a.createElement("code",null,this.props.children))}}]),n}(a.a.Component),y=function(e){function n(e){var t;return Object(i.a)(this,n),(t=Object(p.a)(this,Object(u.a)(n).call(this,e))).toggleCode=function(e){e.preventDefault(),t.setState((function(e){return{showCode:!e.showCode}}))},t.state={showCode:!1},t}return Object(c.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.state.showCode,n=this.props.example,r=n.code,o=n.description,s=n.name,i=t(34)("./".concat(this.props.componentName,"/").concat(s)).default;return a.a.createElement("div",{className:"example"},o&&a.a.createElement("h4",null,o),a.a.createElement(i,null),a.a.createElement("p",null,a.a.createElement("button",{onClick:this.toggleCode},e?"Hide":"Show"," Code")),e&&a.a.createElement(b,null,r))}}]),n}(a.a.Component),w=function(e){var n=e.props;return a.a.createElement("table",{className:"props"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Name"),a.a.createElement("th",null,"Description"),a.a.createElement("th",null,"Type"),a.a.createElement("th",null,"Default"),a.a.createElement("th",null,"Required"))),a.a.createElement("tbody",null,Object.keys(n).map((function(e){return a.a.createElement("tr",{key:e},a.a.createElement("td",null,e),a.a.createElement("td",null,n[e].description),a.a.createElement("td",null,n[e].type.name),a.a.createElement("td",null,n[e].defaultValue&&n[e].defaultValue.value),a.a.createElement("td",null,n[e].required&&"X"))}))))},v=function(e){var n=e.component,t=n.name,r=n.description,o=n.props,s=n.examples;return a.a.createElement("div",{className:"componentpage"},a.a.createElement("h2",null,t),a.a.createElement("p",null,r),a.a.createElement("h3",null,"Example",s.length>1&&"s"),s.length>0?s.map((function(e){return a.a.createElement(y,{key:e.name,example:e,componentName:t})})):"No examples exist.",a.a.createElement("h3",null,"Props"),o?a.a.createElement(w,{props:o}):"This component accepts no props.")},x=t(12),P=t.n(x),E=function(e){function n(e){var t;return Object(i.a)(this,n),(t=Object(p.a)(this,Object(u.a)(n).call(this,e))).state={route:window.location.hash.substr(1)},t}return Object(c.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("hashchange",(function(){e.setState({route:window.location.hash.substr(1)})}))}},{key:"render",value:function(){var e=this.state.route,n=e?P.a.filter((function(n){return n.name===e}))[0]:P.a[0];return a.a.createElement("div",null,a.a.createElement(d,{components:P.a.map((function(e){return e.name}))}),a.a.createElement(v,{component:n}))}}]),n}(a.a.Component);t(35);s.a.render(a.a.createElement(E,null),document.getElementById("root"))}],[[28,1,2]]]);
//# sourceMappingURL=main.d4a30984.chunk.js.map