// import React from "react";
// import { Button } from "../ui/button";
// import clsx from "clsx";
// const OrderHistory = () => {
//   const orders = [
//     {
//       id: 1,
//       orderDate: "May 10, 2025",
//       eventDate: "May 20, 2025",
//       paymentStatus: "PAID",
//       fulfillmentStatus: "FULFILLED",
//       statusColor: "green",
//       totalCost: "$299.00",
//       trackingUrl: "#",
//       invoiceUrl: "#",
//     },
//     {
//       id: 2,
//       orderDate: "May 5, 2025",
//       eventDate: "May 18, 2025",
//       paymentStatus: "UNPAID",
//       fulfillmentStatus: "PENDING",
//       statusColor: "yellow",
//       totalCost: "$189.50",
//       trackingUrl: "#",
//       invoiceUrl: "#",
//     },
//     {
//       id: 3,
//       orderDate: "Apr 28, 2025",
//       eventDate: "May 10, 2025",
//       paymentStatus: "PAID",
//       fulfillmentStatus: "CANCELLED",
//       statusColor: "red",
//       totalCost: "$0.00",
//       trackingUrl: "#",
//       invoiceUrl: "#",
//     },
//   ];

//   return (
//     <div>
//       <section className="">
//         <div className="mb-[45px]">
//           <div className="">
//             <div className="flex items-center justify-between">
//               <h2 className="text-3xl  tracking-widest font-normal mb-6 ">
//                 Order History
//               </h2>
//               <p className="text-2xl font-normal">April 10, 2023 - Today</p>
//             </div>
//             <hr className="border border-b border-[#000000]" />
//           </div>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="w-full text-xs">
//             <thead className="border-b bg-[#E5E7EB]">
//               <tr>
//                 <th className="py-3 px-20 text-left text-sm text-[#6B7280] font-normal">
//                   Order Date
//                 </th>
//                 <th className="py-3 px-20 text-left text-sm text-[#6B7280] font-normal">
//                   Event Date
//                 </th>
//                 <th className="py-3 px-20 text-left text-sm text-[#6B7280] font-normal">
//                   Payment
//                 </th>
//                 <th className="py-3 px-20 text-left text-sm text-[#6B7280] font-normal">
//                   Fulfillment Status
//                 </th>
//                 <th className="py-3 px-20 text-left text-sm text-[#6B7280] font-normal">
//                   Total Cost
//                 </th>
//                 <th className="py-3 px-20 text-left text-sm text-[#6B7280] font-normal">
//                   Tracking
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {orders.map((order) => (
//                 <tr key={order.id} className="border-b ">
//                   <td className="py-[33px] border-r border-[#A8A8A8] px-20 font-normal text-[16px] text-[#111827]">
//                     {order.orderDate}
//                   </td>
//                   <td className="py-[33px] border-r border-[#A8A8A8] px-20 font-normal text-[16px] text-[#111827]">
//                     {order.eventDate}
//                   </td>
//                   <td className="py-[33px] border-r border-[#A8A8A8] px-20 font-normal text-[16px] text-[#111827]">
//                     {order.paymentStatus}
//                   </td>
//                   <td className="py-[33px] border-r border-[#A8A8A8] px-20 font-normal text-[16px] text-[#111827]">
//                     <span
//                       className={clsx("px-2 py-1 rounded-full text-[10px]", {
//                         "bg-green-100 text-green-800":
//                           order.statusColor === "green",
//                         "bg-yellow-100 text-yellow-800":
//                           order.statusColor === "yellow",
//                         "bg-red-100 text-red-800": order.statusColor === "red",
//                       })}
//                     >
//                       {order.fulfillmentStatus}
//                     </span>
//                   </td>
//                   <td className="py-[33px] border-r border-[#A8A8A8] px-20 font-normal text-[16px] text-[#111827]">
//                     {order.totalCost}
//                   </td>
//                   <td className="py-[33px] border-r border-[#A8A8A8] px-20 font-normal text-[16px] text-[#111827]">
//                     <Button
//                       variant="link"
//                       size="sm"
//                       className="text-xs p-0 h-auto text-blue-600"
//                       asChild
//                     >
//                       <a href={order.trackingUrl}>TRACK ORDER</a>
//                     </Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default OrderHistory;





import React from "react";
import { Button } from "../ui/button";
import clsx from "clsx";

const OrderHistory = () => {
  const orders = [
    {
      id: 1,
      orderDate: "May 10, 2025",
      eventDate: "May 20, 2025",
      paymentStatus: "PAID",
      fulfillmentStatus: "FULFILLED",
      statusColor: "green",
      totalCost: "$299.00",
      trackingUrl: "#",
      invoiceUrl: "#",
    },
    {
      id: 2,
      orderDate: "May 5, 2025",
      eventDate: "May 18, 2025",
      paymentStatus: "UNPAID",
      fulfillmentStatus: "PENDING",
      statusColor: "yellow",
      totalCost: "$189.50",
      trackingUrl: "#",
      invoiceUrl: "#",
    },
    {
      id: 3,
      orderDate: "Apr 28, 2025",
      eventDate: "May 10, 2025",
      paymentStatus: "PAID",
      fulfillmentStatus: "CANCELLED",
      statusColor: "red",
      totalCost: "$0.00",
      trackingUrl: "#",
      invoiceUrl: "#",
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <section>
        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
            <h2 className="text-2xl sm:text-3xl tracking-widest font-normal">
              Order History
            </h2>
            <p className="text-base sm:text-lg md:text-2xl font-normal">
              April 10, 2023 - Today
            </p>
          </div>
          <hr className="mt-4 border border-black" />
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-200">
              <tr>
                {[
                  "Order Date",
                  "Event Date",
                  "Payment",
                  "Fulfillment Status",
                  "Total Cost",
                  "Tracking",
                ].map((header, index) => (
                  <th
                    key={index}
                    className="py-3 px-4 sm:px-6 lg:px-10 text-left text-gray-600 font-normal text-sm whitespace-nowrap"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b">
                  <td className="py-6 px-4 sm:px-6 lg:px-10 text-base text-gray-900 border-r border-gray-300">
                    {order.orderDate}
                  </td>
                  <td className="py-6 px-4 sm:px-6 lg:px-10 text-base text-gray-900 border-r border-gray-300">
                    {order.eventDate}
                  </td>
                  <td className="py-6 px-4 sm:px-6 lg:px-10 text-base text-gray-900 border-r border-gray-300">
                    {order.paymentStatus}
                  </td>
                  <td className="py-6 px-4 sm:px-6 lg:px-10 text-base text-gray-900 border-r border-gray-300">
                    <span
                      className={clsx("px-2 py-1 rounded-full text-xs", {
                        "bg-green-100 text-green-800":
                          order.statusColor === "green",
                        "bg-yellow-100 text-yellow-800":
                          order.statusColor === "yellow",
                        "bg-red-100 text-red-800": order.statusColor === "red",
                      })}
                    >
                      {order.fulfillmentStatus}
                    </span>
                  </td>
                  <td className="py-6 px-4 sm:px-6 lg:px-10 text-base text-gray-900 border-r border-gray-300">
                    {order.totalCost}
                  </td>
                  <td className="py-6 px-4 sm:px-6 lg:px-10 text-base text-gray-900">
                    <Button
                      variant="link"
                      size="sm"
                      className="text-xs p-0 h-auto text-blue-600"
                      asChild
                    >
                      <a href={order.trackingUrl}>TRACK ORDER</a>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default OrderHistory;
