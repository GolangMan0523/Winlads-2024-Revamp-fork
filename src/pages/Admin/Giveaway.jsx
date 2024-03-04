import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemLoader from "../../components/Loader/ItemLoader";
import { useTable } from "react-table";

const Giveaway = () => {
  const [rounds, setRounds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRound();
  }, []);

  const getRound = async () => {
    await axios
      .get(
        `${
          import.meta.env.VITE_SERVER_API
        }/raffleRoundTicketsByUsers?roundid=659719fa3d700dd190188e54&from=1&to=100`
      )
      .then((response) => {
        console.log(response.data.data);
        setRounds(response?.data?.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex xl:justify-center items-center py-8 flex-col overflow-x-auto px-4">
      <p className="font-semibold mb-12 xl:text-4xl text-3xl">
        Current Round Details
      </p>
      {loading ? (
        <div className="flex justify-center py-12">
          <ItemLoader className="w-9 h-9 2xl:w-9 2xl:h-9 special:w-18 special:h-18 animate-spin" />
        </div>
      ) : (
        <div className="flex flex-col gap-4 text-black overflow-x-auto">
          <div className="flex flex-row justify-between font-bold">
            <p className="xl:mr-24 mr-0">ID</p>
            <div className="flex flex-row gap-12">
              <p>First Name</p>
              <p>Last Name</p>
            </div>

            <p>Mobile</p>
            <p>Email</p>
            <p>Entries</p>
          </div>
          <hr />
          <div className="justify-start flex flex-col space-y-2">
            {rounds.map((round, key) => (
              <>
                <div
                  key={key}
                  className="flex flex-row justify-between text-start gap-12 text-xs"
                >
                  <p>{round.user.uid}</p>
                  <p>{round.user.firstname}</p>
                  <p>{round.user.lastname}</p>
                  <p>{round.user.mobile}</p>
                  <p>{round.user.email}</p>
                  <p>{round.entries}</p>
                </div>
                <hr />
              </>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Giveaway;
