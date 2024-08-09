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
  const replyBtn = createElement("button", {
    innerText: "Reply",
    className: "reply",
  });

  const mainComment = createElement(
    "div",
    { className: "main-comment" },
    p1,
    p2,
    replyBtn
  );

  const subCommentContainer = createElement("div", {
    className: "sub-comment-container",
  });

  const comment = createElement(
    "div",
    { className: "comment" },
    mainComment,
    subCommentContainer
  );
  return comment;
};

const createCommentInput = () => {
  const nameInput = createElement("input", {
    type: "text",
    placeholder: "Your Name?",
    className: "text-name name",
  });

  const commentInput = createElement("textarea", {
    placeholder: "Your Comment?",
    className: "comment-text",
    rows: 2,
    cols: 40,
  });

  const postBtn = createElement("button", {
    textContent: "Post",
    className: "post",
  });

  const cancelBtn = createElement("button", {
    textContent: "Cancel",
    className: "cancel",
  });

  const btnHolder = createElement(
    "div",
    {
      className: "btn-holder",
    },
    postBtn,
    cancelBtn
  );

  const commentInputContainer = createElement(
    "div",
    {
      className: "comment-input-container",
    },
    nameInput,
    commentInput,
    btnHolder
  );

  return commentInputContainer;
};

const firstComment = createComment("Shashwat", "Scaler Academy is awesome!!!");
commentContainer.append(firstComment);

let isCommentOn = false;
commentContainer.addEventListener("click", (event) => {
  const clickedElement = event.target;

  if (clickedElement.tagName.toLowerCase() === "button") {
    if (clickedElement.classList.contains("reply") && !isCommentOn) {
      isCommentOn = true;
      clickedElement
        .closest(".main-comment")
        .nextElementSibling.append(createCommentInput());

      return;
    }

    if (clickedElement.classList.contains("post")) {
      isCommentOn = false;
      const comment = clickedElement.closest(".comment-input-container");
      const name = comment.children[0].value;
      const text = comment.children[1].value;

      if (!name || !text) return;
      clickedElement
        .closest(".sub-comment-container")
        .append(createComment(name, text));
      comment.remove();

      return;
    }

    if (clickedElement.classList.contains("cancel")) {
      isCommentOn = false;
      clickedElement.closest(".comment-input-container").remove();

      return;
    }
  }
});
