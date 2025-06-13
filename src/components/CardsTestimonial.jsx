const CardsTestimonial = () => {
  return (
    <div className="bg-[var(--background-color)] w-64 md:w-80 p-4 flex flex-col items-center text-center rounded-lg shadow-lg">
      {/* Image */}
      <div className="mb-4">
        <img
          src="../public/assets/testimonials_img/person1.jpg"
          alt="person"
          className="md:w-20 md:h-20 w-14 h-14 rounded-full"
        />
      </div>

      {/* Star */}
      <div className="mb-8">
        <img src="../public/assets/Star1.png" alt="star" />
      </div>

      {/* Comment */}
      <div className="mb-2">
        <p className="font-medium text-xl">
          “I love it! No more air fresheners”
        </p>
      </div>

      {/* Author */}
      <div>
        <p className="text-[var(--text-muted-color)]">Luisa</p>
      </div>
    </div>
  );
};

export default CardsTestimonial;
