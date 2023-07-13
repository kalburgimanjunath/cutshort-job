export default function Plans() {
  const plans = [
    { title: 'Get matched to jobs & apply', free: true, careerplus: true },
    { title: 'Let 5000+ companies contact you', free: true, careerplus: true },
    { title: 'Job application limit', free: true, careerplus: true },
    { title: 'Profile boost', free: true, careerplus: true },
    { title: 'Higher chances of shortlisting', free: true, careerplus: true },
    { title: 'Priority job alerts', free: true, careerplus: true },
  ];
  return (
    <div className="grid grid-cols-5 gap-4 bg-gray-100">
      <div className="col-span-4 m-3 text-lg text-center">
        You are on <span className="font-bold">Free plan</span>
        <div>
          {plans &&
            plans.map((item) => {
              return (
                <div className="flex border-t-2 shadow-md grid grid-cols-3 justify-items-start p-2 hover:bg-gray-200">
                  <div>{item.title}</div>
                  <div>{item.free ? 'true' : 'false'}</div>
                  <div>{item.careerplus ? 'true' : 'false'}</div>
                </div>
              );
            })}
          <div>
            <div>
              <h1>FREE</h1>
              <div> Current Plan Valid Forever</div>
            </div>
            <div></div>
          </div>
        </div>
      </div>

      <div className="col-span-1 m-2"></div>
    </div>
  );
}
