import React from "react";

interface Props {
  name: string;
  description: string;
}

export default function DescriptionParser({ name, description }: Props) {
  return (
    <>
      {description.length > 120 ? (
        <OverflowDescription
          name={name}
          description={description.slice(0, 120)}
        />
      ) : (
        <NormalDescription name={name} description={description} />
      )}
    </>
  );
}

function NormalDescription({ name, description }: Props) {
  return (
    <div className="text-sm">
      <p>
        <span className="font-medium">{name} </span>
        {description}
      </p>
    </div>
  );
}

function OverflowDescription({ name, description }: Props) {
  return (
    <div className="text-sm">
      <p>
        <span className="font-medium">{name} </span>
        {description.trimEnd()}... <span className="text-gray-500">more</span>
      </p>
    </div>
  );
}
