export function Newsletter() {
  return (
    <div className="mt-6 p-5 rounded-xl bg-zinc-50 border border-zinc-200">
      <h3 className="text-base font-bold text-zinc-900">
        Never Miss A Post!
      </h3>
      <p className="text-sm text-zinc-500 mt-1 leading-relaxed">
        Sign up for free and be the first to get notified about updates.
      </p>
      <form className="mt-4 flex flex-col gap-3">
        <input
          type="email"
          placeholder="Your email address"
          required
          className="w-full px-3 py-2.5 text-sm rounded-lg border border-zinc-300 bg-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:border-zinc-400 transition"
        />
        <button
          type="submit"
          className="w-full px-4 py-2.5 text-sm font-semibold text-white bg-zinc-800 rounded-lg hover:bg-zinc-900 transition"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
