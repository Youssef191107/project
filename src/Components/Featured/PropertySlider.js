import React from "react";
import PropertyCard from "./PropertyCard";
import Image1 from "../../images/Rectangle15.png";
import Image2 from "../../images/Rectangle0.png";
import Image3 from "../../images/Rectangle1.png";
import Image4 from "../../images/Rectangle2.png";
import AgentImage1 from "../../images/Ellipse6.png";

const PropertySlider = ({ selectedType, currentIndex }) => {
  const properties = [
    {
      image: Image1,
      statusLabel: "Popular",
      statusColor: "red",
      title: "Roselands House",
      price: "35,000.000",
      agent: "Dianne Russell",
      location: "Manchester, Kentucky",
      agentImage: AgentImage1,
      type: "House",
    },
    {
      image: Image2,
      statusLabel: "New House",
      statusColor: "blue",
      title: "Woodlandside",
      price: "20,000.000",
      agent: "Robert Fox",
      location: "Dr. San Jose, South Dakota",
      agentImage: AgentImage1,
      type: "House",
    },
    {
      image: Image3,
      statusLabel: "Best Deals",
      statusColor: "green",
      title: "The Old Lighthouse",
      price: "44,000.000",
      agent: "Ronald Richards",
      location: "Santa Ana, Illinois",
      agentImage: AgentImage1,
      type: "House",
    },
    {
      image: Image1,
      statusLabel: "Popular",
      statusColor: "red",
      title: "Roselands House",
      price: "35,000.000",
      agent: "Dianne Russell",
      location: "Manchester, Kentucky",
      agentImage: AgentImage1,
      type: "House",
    },
    {
      image: Image2,
      statusLabel: "New House",
      statusColor: "blue",
      title: "Woodlandside",
      price: "20,000.000",
      agent: "Robert Fox",
      location: "Dr. San Jose, South Dakota",
      agentImage: AgentImage1,
      type: "House",
    },
    {
      image: Image3,
      statusLabel: "Best Deals",
      statusColor: "green",
      title: "The Old Lighthouse",
      price: "44,000.000",
      agent: "Ronald Richards",
      location: "Santa Ana, Illinois",
      agentImage: AgentImage1,
      type: "House",
    },
    {
      image: Image3,
      statusLabel: "Best Deals",
      statusColor: "green",
      title: "The Old Lighthouse",
      price: "44,000.000",
      agent: "Ronald Richards",
      location: "Santa Ana, Illinois",
      agentImage: AgentImage1,
      type: "Villa",
    },
    {
        image: Image2,
        statusLabel: "New House",
        statusColor: "blue",
        title: "Woodlandside",
        price: "20,000.000",
        agent: "Robert Fox",
        location: "Dr. San Jose, South Dakota",
        agentImage: AgentImage1,
        type: "Apartment",
      },
        {
            image: Image1,
            statusLabel: "Popular",
            statusColor: "red",
            title: "Roselands House",
            price: "35,000.000",
            agent: "Dianne Russell",
            location: "Manchester, Kentucky",
            agentImage: AgentImage1,
            type: "Villa",
        },
        {
            image: Image1,
            statusLabel: "Best Deals",
            statusColor: "red",
            title: "The Old Lighthouse",
            price: "44,000.000",
            agent: "Ronald Richards",
            location: "Santa Ana, Illinois",
            agentImage: AgentImage1,
            type: "Apartment",
        },
        {
            image: Image3,
            statusLabel: "Best Deals",
            statusColor: "green",
            title: "The Old Lighthouse",
            price: "44,000.000",
            agent: "Ronald Richards",
            location: "Santa Ana, Illinois",
            agentImage: AgentImage1,
            type: "Apartment",
        },

    // Add other properties with their respective types
  ];

  const filteredProperties = properties.filter(
    (property) => property.type === selectedType
  );

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-300"
        style={{ transform: `translateX(-${currentIndex * 91}%)` }}
      >
        {filteredProperties.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>
    </div>
  );
};

export default PropertySlider;
