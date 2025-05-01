function FeatureCard({ title, description, icon, link }) {
  return (
    <a href={link} className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </a>
  );
}

export default FeatureCard;
