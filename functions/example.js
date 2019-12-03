// Emails the author when a new comment is added to a post
export const newComment = functions.firestore
  .document("posts/{postId}/comments/{commentId}")
  .onCreate(async (change, context) => {
    // Read the post document
    const postSnap = await db
      .collection("posts")
      .doc(context.params.postId)
      .get();

    // Raw Data
    const post = postSnap.data();
    const comment = change.data();

    // Email
    const msg = {
      to: post.authorEmail,
      from: "hello@fireship.io",
      templateId: TEMPLATE_ID,
      dynamic_template_data: {
        subject: `New Comment on ${post.title}`,
        name: post.displayName,
        text: `${comment.user} said... ${comment.text}`
      }
    };

    // Send it
    return sgMail.send(msg);
  });
