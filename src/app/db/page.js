import React from "react";
import PreviewCode from "@/components/PreviewCode";

export default function dbPage() {
  return (
    <>
      <div className="row">
        <div className="container">
          <h1 className="text-3xl font-bold mb-8">Database V1</h1>

          <p className="text">
            ดู{" "}
            <a href="https://dbdiagram.io/d/Merry-Match-68198aa61ca52373f597b622" target="_blank">
              db diagram
            </a>
          </p>

          <PreviewCode language="css">
            {`Table users {
  id uuid [pk]
  username varchar [unique]
  password text [not null]
  name varchar [not null]
  email varchar [unique]
  location varchar [not null]
  city varchar [not null]
  sexsual_identity enum('male', 'female', 'non-binary', 'other') [not null]
  sexual_preference enum('men', 'women', 'everyone') [not null]
  racial_preference enum('asian', 'caucasian', 'hispanic', 'african', 'mixed', 'other', 'no_preference') [not null]
  meeting_interest enum('friendship', 'relationship', 'casual', 'networking') [not null]
  bio text
  date_of_birth date [not null]
  profile_image_url varchar [not null]
  image2_url varchar [not null]
  image3_url varchar
  image4_url varchar
  image5_url varchar
  package_id uuid [not null]
  status enum('active', 'inactive', 'suspended', 'deleted') [not null]
  created_at timestamp 
}

Table hobbies {
  id id [pk]
  user_id uuid [not null]
  hobbie_name varchar [not null]
}

Table packages {
  id id [pk]
  package_name varchar [not null]
  price int [not null]
  duration_days int [not null]
  description text [not null]
  merry_per_day int [not null]
}

Table user_packages {
  id uuid [pk]
  user_id uuid [ref: > users.id]
  package_id uuid [ref: > packages.id]
  start_date date
  end_date date
  status varchar // 'active' | 'expired'
}


Table merry {
  id uuid [pk]
  from_user_id uuid [not null]
  to_user_id uuid [not null]
  created_at timestamp

  Note: 'Record of who liked whom'
}

Table merry_log {
  id uuid [pk]
  user_id uuid [not null]
  merry_at timestamp
}

Table matches {
  id uuid [pk]
  user1_id uuid [not null]
  user2_id uuid [not null]
  matched_at timestamp
}

Table complaint {
  id uuid [pk]
  user_id uuid [not null]
  issue varchar
  description text 
}

// Relationships
Ref: merry.from_user_id > users.id
Ref: merry.to_user_id > users.id
Ref: matches.user1_id > users.id
Ref: matches.user2_id > users.id
Ref: "users"."id" < "hobbies"."user_id"
Ref: "users"."id" < "merry_log"."user_id"
Ref: "complaint"."id" < "users"."id"
`}
          </PreviewCode>
        </div>
      </div>
    </>
  );
}
