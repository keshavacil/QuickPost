import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./style.module.css";

export default function SubscriptionPage() {
  const plans = [
    {
      planName: "Free",
      description: "Best for new users",
      price: "0.00 USD",
      bgColor: "white",
      buttonText: "Sign Up for Free",
      features: [
        { text: "1 User", hasInfo: true },
        { text: "Access to basic features", hasInfo: true },
        { text: "5 Users", hasInfo: true },
        { text: "Priority support", hasInfo: true },
        { text: "5 Users", hasInfo: true },
        { text: "Priority support", hasInfo: true },
        { text: "5 Users", hasInfo: true },
        { text: "Priority support", hasInfo: true },
      ],
    },
    {
      planName: "Pro",
      description: "For professional users",
      price: "9.99 USD",
      buttonText: "Get Pro",
      bgColor: "linear-gradient(156deg,#fffcef,#fff)",
      features: [
        { text: "5 Users", hasInfo: true },
        { text: "Priority support", hasInfo: true },
        { text: "5 Users", hasInfo: true },
        { text: "Priority support", hasInfo: true },
        { text: "5 Users", hasInfo: true },
        { text: "Priority support", hasInfo: true },
        { text: "5 Users", hasInfo: true },
        { text: "Priority support", hasInfo: true },
      ],
    },
    {
      planName: "Business",
      description: "For Business Users",
      price: "9.99 USD",
      buttonText: "Get Business",
      bgColor: "linear-gradient(156deg,#fff,#eff3ff 67.71%),#fff",
      features: [
        { text: "5 Users", hasInfo: true },
        { text: "Priority support", hasInfo: true },
        { text: "5 Users", hasInfo: true },
        { text: "Priority support", hasInfo: true },
        { text: "5 Users", hasInfo: true },
        { text: "Priority support", hasInfo: true },
        { text: "5 Users", hasInfo: true },
        { text: "Priority support", hasInfo: true },
      ],
    },
    {
      planName: "Execitive",
      description: "For Execitive Users",
      price: "9.99 USD",
      buttonText: "Custom",
      bgColor: "linear-gradient(156deg,#fff,#e6f9ff 67.71%),#fff",
      features: [
        { text: "5 Users", hasInfo: true },
        { text: "Priority support", hasInfo: true },
        { text: "5 Users", hasInfo: true },
        { text: "Priority support", hasInfo: true },
        { text: "5 Users", hasInfo: true },
        { text: "Priority support", hasInfo: true },
        { text: "5 Users", hasInfo: true },
        { text: "Priority support", hasInfo: true },
      ],
    },
  ];

  return (
    <div className={styles.subscriptionPage}>
      <div className={styles.subscriptionPageHeader}>
        <h1>Subscription Plans</h1>
      </div>
      <div className={styles.subscriptionPageContent}>
        {plans.map((plan, index) => (
          <div key={index} className={styles.subscriptionPageContentInner}  style={{ background: plan.bgColor }}>
            <div className={styles.subscriptionPageContentTop}>
              <h4>{plan.planName}</h4>
              <p>{plan.description}</p>
              <h2>{plan.price} / month</h2>
              <button>{plan.buttonText}</button>
            </div>
            <div className={styles.subscriptionPageContentBottom}>
              <h6>Included:</h6>
              {plan.features.map((feature, idx) => (
                <div key={idx} className={styles.Pointers}>
                 <div>
                 <FontAwesomeIcon icon={faCheck} className={styles.icon}/>
                 <p>{feature.text}</p>
                 </div>
                  {feature.hasInfo && <FontAwesomeIcon icon={faInfoCircle} />}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
