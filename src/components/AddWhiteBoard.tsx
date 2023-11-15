import React from "react";

const AddWhiteBoard = () => {
	return (
		<section className="  w-[1090.2px]">
			<form className="grid gap-[2rem]">
				<div className="flex items-center justify-between">
					<div className="input">
						<label htmlFor="id">ID</label>
						<input id="id" type="text" />
					</div>

					<div className="input">
						<label htmlFor="text">Interaction Distance</label>
						<input id="text" type="text" />
					</div>
				</div>

				<div className="input">
					<label htmlFor="whiteboard">Board Model</label>
					<input id="whiteboard" type="text" className="!w-[982px]"/>
				</div>

				<div className="input">
					<label htmlFor="url">URL (optional)</label>
					<input id="url" type="text" className="!w-[982px]"/>
				</div>

				<div className="flex items-center justify-between">
					<div className="input">
						<label htmlFor="read">Read Only</label>
						<button type="button" className="p-2 bg-red-600 w-[150px] rounded-lg text-[1.2rem]">False</button>
					</div>
					<div className="input">
						<label htmlFor="ace">Use Ace Permissions</label>
						<button type="button" className="p-2 bg-red-600 w-[150px] rounded-lg text-[1.2rem]">False</button>
					</div>
				</div>

				<div className="grid gap-[2rem]">
					<div className="input">
						<label htmlFor="jobs">
							Jobs (Optional, split by comma without spaces)
						</label>
						<input id="jobs" type="text" className="!w-[982px]"/>
					</div>
					<div className="input">
						<label htmlFor="grades">Grades (optional) </label>
						<input id="grades" type="text" className="!w-[982px]"/>
					</div>
				</div>
			</form>
		</section>
	);
};

export default AddWhiteBoard;
