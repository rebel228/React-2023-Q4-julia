function InvalidRoute() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div style={{ fontSize: '30px', color: 'red' }}>{'404 not found!'}</div>
    </div>
  );
}

export default InvalidRoute;
