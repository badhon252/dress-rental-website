import React from "react";

export default function DisputeDetails() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-2">
        <h2 className="text-sm font-normal text-gray-700">Dispute Details</h2>
        <div className="mt-1 border-t border-gray-300"></div>
      </div>

      <div className="border border-gray-300 rounded p-6 mb-8">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="text-sm text-gray-600 mb-1">Order ID : XXXXXX</p>
            <p className="text-sm text-gray-600 mt-4">
              Issue Type : Item hasn&apos;t arrived
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">
              Date Submitted : 20/04/2025
            </p>
            <div className="flex items-center mt-4">
              <p className="text-sm text-gray-600 mr-2">Status :</p>
              <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded">
                Pending
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-2">
        <h2 className="text-sm font-normal text-gray-700">
          Timeline & Communication
        </h2>
        <div className="mt-1 border-t border-gray-300"></div>
      </div>

      <div className="relative">
        {/* Timeline items */}
        <TimelineItem
          title="SUBMISSION"
          date="20/04/2025 · 9:45 AM"
          message="Issue reported: 'Item hasn't arrived'"
        />

        <TimelineItem
          title="RESPONSE"
          date="20/04/2025 · 11:00 AM"
          message="Your issue is under review. Our team is checking the delivery status with our logistics partner."
        />

        <TimelineItem
          title="UPDATE"
          date="21/04/2025 · 2:15 PM"
          message="Please provide additional photos of the delivery address to help us locate your package."
        />

        <TimelineItem
          title="RESOLUTION"
          date="22/04/2025 · 10:20 AM"
          message="Issue resolved, refund processed. The refund will appear in your account within 5-7 business days."
        />
      </div>
    </div>
  );
}

interface TimelineItemProps {
  title: string;
  date: string;
  message: string;
}

function TimelineItem({ title, date, message }: TimelineItemProps) {
  return (
    <div className="flex mb-8">
      <div className="mr-4 mt-1">
        <div className="w-5 h-5 rounded-full bg-black"></div>
      </div>
      <div>
        <h3 className="text-xs font-medium uppercase text-gray-800">{title}</h3>
        <p className="text-xs text-gray-500 mt-0.5 mb-1">{date}</p>
        <p className="text-sm text-gray-700">{message}</p>
      </div>
    </div>
  );
}
