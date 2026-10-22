
import type { UserProfileCardProps } from "../../types";

export function UserProfileCard({
  user,
  showEmail = true,
  showRole = true,
  onEdit,
  children,
}: UserProfileCardProps) {
  return (
    <article className="user-card">
      {/* Display the avatar only if one is provided. */}
      {user.avatarUrl && (
        <img
          src={user.avatarUrl}
          alt={`${user.name}'s avatar`}
          className="user-avatar"
        />
      )}

      {/* Display the user's name. */}
      <h2>{user.name}</h2>

      {/* Display optional user information. */}
      {showEmail && <p>Email: {user.email}</p>}
      {showRole && <p>Role: {user.role}</p>}

      {/* Only display the edit button if onEdit exists. */}
      {onEdit && (
        <button type="button" onClick={() => onEdit(user.id)}>
          Edit Profile
        </button>
      )}

      {/* Render any additional content passed by the parent. */}
      {children}
    </article>
  );
}