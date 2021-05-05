import { formatRelative } from "date-fns";

const formatDate = (date) => {
  let formattedDate = "";
  if (date) {
    //Convert the date in words relative to the current date
    formattedDate = formatRelative(date, new Date());
    //Uppercase the first letter
    formattedDate =
      formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  }
  return formattedDate;
};

const Message = ({
  createdAt = null,
  text = "",
  displayName = "",
  photoURL = "",
}) => {
  if (!text) return null;

  return (
    <div className="mj">
      <b>
        {displayName ? (
          <p>
            <p>
              {photoURL ? (
                <img
                  src={photoURL}
                  alt="Avatar"
                  className="rounded-full mr-a"
                  width={45}
                  height={45}
                />
              ) : null}{" "}
            </p>
            {displayName}...
            {createdAt?.seconds ? (
              <span>{formatDate(new Date(createdAt.seconds * 1000))}</span>
            ) : null}
          </p>
        ) : null}
      </b>
      <p>{text} </p>
    </div>
  );
};
export default Message;
