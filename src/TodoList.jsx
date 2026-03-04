export default function TodoList() {
	return (
		<div className="flex items-center max-w-xl border-2 border-blue-500 p-2 rounded-2xl mx-auto">
			<ul className="w-full">
				<Task/>
				<Task/>
				<Task/>
			</ul>
		</div>
	);
}
function Task() {
	return (
		<li className="w-full flex items-center justify-between h-9 border-b-blue-500 outline-none mb-3">
			<input type="checkbox" className="w-10 h-10 m-1 accent-blue-500" />
			<label className="w-full px-5 py-2 text-lg">Buy rice</label>
			<div className="flex justify-center items-center">
				<button className="w-20 font-bold px-3 mx-1 text-center py-1 bg-blue-500 hover:bg-blue-900 rounded-2xl">
					delete
				</button>
				<button className="w-20 font-bold px-3 mx-1 text-center py-1 bg-blue-500 hover:bg-blue-900 rounded-2xl">
					edit
				</button>
			</div>
		</li>
	);
}
