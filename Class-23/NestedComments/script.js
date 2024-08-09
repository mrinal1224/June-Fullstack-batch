const commentContainer = document.getElementById("commentContainer");

const createElement = (elementName, attributes, ...children) => {
  const element = document.createElement(elementName);

  for (let scaler in attributes) {
    element[scaler] = attributes[scaler];
  }

  children.forEach((child) => element.appendChild(child));

  return element;
};

const createComment = (name, text) => {
  const p1 = createElement("p", { innerText: name });
  const p2 = createElement("p", { innerText: text });
  const replyBtn = createElement("button", { innerText: "Reply" });

  const mainComment = createElement(
    "div",
    { className: "main-comment" },
    p1,
    p2,
    replyBtn
  );

  return mainComment;
};

const firstComment = createComment("Shashwat", "Scaler Academy is awesome!!!");
commentContainer.append(firstComment);

commentContainer.addEventListener("click", () => {});
