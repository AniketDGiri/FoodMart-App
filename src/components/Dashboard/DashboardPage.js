import DashboardEmpty from "./DashboardEmpty";
import DashboardCard from "./DashboardCard";
import { useLoaderData } from "react-router-dom";
import apiCalls from "../../services/apiCalls";
import { getSessionData } from "../../services/sessionDetails";

export const DashboardPage = () => {
  const { status, orderDetails } = useLoaderData();

  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          My Dashboard
        </p>
      </section>

      {status === 200 && orderDetails.length !== 0 ? (
        <section>
          {orderDetails
            .map((item) => {
              return <DashboardCard order={item} key={item.id} />;
            })
            .sort((order1, order2) => {
              return Number(order2.key) - Number(order1.key);
            })}
        </section>
      ) : (
        <section>
          <DashboardEmpty />
        </section>
      )}
    </main>
  );
};

export const DashboardPageLoader = async () => {
  //fetching session info of the logged in User
  const { accessToken, userId } = getSessionData();

  const url = `${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT_NO}/660/orders?userDetails.id=${userId}`;

  const res = await apiCalls({
    method: "get",
    url: url,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return { status: res.status, orderDetails: res.data };
};

export default DashboardPage;
