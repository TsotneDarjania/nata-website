import clsx from "clsx";
import Image from "next/image";

export default function TextAndImage({
  textDirection,
  className,
}: {
  textDirection: "left" | "right";
  className?: string;
}) {
  return (
    <div
      className={
        "grid grid-cols-1 xl:grid-cols-2 px-3 justify-center items-center" +
        className
      }
    >
      {/* Text Content */}
      <div
        className={clsx(
          "flex order-2 justify-center items-center mt-10 lg:mt-0  ",
          textDirection === "left" ? "order-1" : "order-2"
        )}
      >
        <p className="georgian-font text-balance text-cyan-950 text-base max-w-[80%] font-semibold">
          <ul className=" list-disc flex flex-col gap-3">
            <li>
              კეთილი იყოს თქვენი მობრძანება ნატას გვერდზე, ჩემთვის დიდი პატივია
              გაგიზიაროთ ეს პატარა სივრცე და იმედი მაქვს, რომ ამ გვერდზე თვენს
              ინპირაციას იპოვით უკეთესი ცხოვრებისთვის
            </li>
            <li>
              ვარ ეკონომისტი, უფრო კონკრეტულად კი ბიზნესის ბაკალავრის ხარისხი
              ტურიზმში , მაგრამ არ ვაპირებ თქვენთან ბიზნესის სხვადასხვა
              პროფილებზე ვისაუბრო ან მაკროეკონომიკასა და ბუღალტერიაზე საუბრით
              დაგღალოთ
            </li>
          </ul>
        </p>
      </div>

      {/* Images content */}
      <div
        className={clsx(
          "flex order-1 justify-center",
          textDirection === "left" ? "order-2" : "order-1"
        )}
      >
        <Image
          className="section-image w-[90%] mt-10 lg:mt-0  lg:w-[60%]"
          alt="nata"
          height={300}
          width={300}
          src={"/images/nata-1.jpg"}
        />
      </div>
    </div>
  );
}
