const presentationSection = () => {
  return (
    
      {hasImage && (
        <div className="pt-20 h-90 w-screen">
          {" "}
          <img src={imageSource} className="object-cover"></img>
        </div>
      )}
    </div>
  );
};
