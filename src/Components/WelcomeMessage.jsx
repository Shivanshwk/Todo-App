import styler from "./WelcomeMessage.module.css";

const WelcomeMessage = (  {todoItems}) => {
  return (
   <p className={styler.welcome}> Enjoy your Task scheduling.</p>
  );
}

export default WelcomeMessage;