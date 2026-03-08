import Time "mo:core/Time";
import List "mo:core/List";
import Runtime "mo:core/Runtime";

actor {
  let submissions = List.empty<ContactSubmission>();

  type ContactSubmission = {
    name : Text;
    email : Text;
    projectDetails : Text;
    timestamp : Time.Time;
  };

  public shared ({ caller }) func submitContact(name : Text, email : Text, projectDetails : Text) : async () {
    if (name.isEmpty() or email.isEmpty() or projectDetails.isEmpty()) {
      Runtime.trap("All fields must be filled out");
    };

    let newSubmission : ContactSubmission = {
      name;
      email;
      projectDetails;
      timestamp = Time.now();
    };

    submissions.add(newSubmission);
  };

  public query ({ caller }) func getAllSubmissions() : async [ContactSubmission] {
    submissions.toArray();
  };
};
